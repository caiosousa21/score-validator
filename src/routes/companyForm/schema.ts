import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(8, "Name must have at least 8 characters."),
  document: yup
    .string()
    .required("Document is required.")
    .length(14, "Document must be exactly 14 characters."),
  revenue: yup
    .number()
    .required("Revenue is required.")
    .positive("Revenue must be a positive number.")
    .min(500, "Revenue must be over 500."),
  city: yup.string().required("City is required."),
});
