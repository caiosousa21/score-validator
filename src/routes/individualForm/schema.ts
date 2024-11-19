import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(8, "Name must have at least 8 characters."),
  age: yup
    .number()
    .required("Age is required.")
    .positive("Age must be a positive number.")
    .integer("Age must be an integer.")
    .min(18, "Age must be at least 18 years old."),
  document: yup
    .string()
    .required("Document is required.")
    .length(11, "Document must be exactly 11 characters."),
  income: yup
    .number()
    .required("Income is required.")
    .positive("Income must be a positive number."),
  city: yup.string().required("City is required."),
});
