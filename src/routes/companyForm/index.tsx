import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../api/api";
import axios from "axios";

interface CompanyFormInput {
  name: string;
  document: string;
  revenue: number;
  city: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(8, "Name must have at least 8 characters."),
  document: yup
    .string()
    .required("Document is required.")
    .length(14, "Document must be exactly 11 characters."),
  revenue: yup
    .number()
    .required("Revenue is required.")
    .positive("Revenue must be a positive number.")
    .min(500, "Revenue must be over 500."),
  city: yup.string().required("City is required."),
});

const CompanyForm = () => {
  const defaultValues = {
    name: "Borracharia dois irmãos",
    document: "00000000000000",
    revenue: 10000,
    city: "Ibitinga",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyFormInput>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<CompanyFormInput> = async (data) => {
    try {
      const response = await api.post("/credit-score/company", data);
      console.log("Response:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data);
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="name">Razão social:</label>
        <input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="document">Document:</label>
        <input id="document" {...register("document")} />
        {errors.document && <p>{errors.document.message}</p>}
        <label htmlFor="revenue">Revenue:</label>
        <input id="revenue" {...register("revenue")} />
        {errors.revenue && <p>{errors.revenue.message}</p>}
        <label htmlFor="city">City:</label>
        <input id="city" {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default CompanyForm;
