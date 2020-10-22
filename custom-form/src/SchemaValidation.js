import * as Yup from "yup";

let textSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, "Must be 3 characters at least")
    .max(15, "Maximum 15 characters")
    .required("Required"),
});

let emailSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
});

let passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, "Must be 3 characters at least")
    .max(10, "Maximum 10 characters")
    .required("Required"),
});

export const validationText = async (text) => {
  if (!text) {
    text = undefined;
  }
  return validation({ text: text }, textSchema);
};

export const validationEmail = async (text) => {
  if (!text) {
    text = undefined;
  }
  return validation({ email: text }, emailSchema);
};

export const validationPassword = async (text) => {
  if (!text) {
    text = undefined;
  }
  return validation({ password: text }, passwordSchema);
};

const validation = async (values, schema) => {
  return schema
    .validate(values)
    .then((res) => {
      return "";
    })
    .catch(function (err) {
      console.log("errors in schemaVlaidation", err.errors);
      return err.errors[0].toString();
    });
};

export const validateAll = (values, validators) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < validators.length; i++) {
      if (validators[i].validator) {
        let valid = validators[i]
          .validator(values[validators[i].name])
          .then((res) => {
            console.log("Valid : ", res);
            if (res) {
              resolve(false);
            }
            if (i == validators.length - 1) {
              resolve(true);
            }
          });
      }
    }
  });
};
