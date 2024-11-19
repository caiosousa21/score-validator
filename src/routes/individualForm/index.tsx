import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../api/api";
import axios from "axios";

interface IndividualFormInput {
  name: string;
  age: number;
  document: string;
  income: number;
  city: string;
}

const schema = yup.object().shape({
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

const IndividualForm = () => {
  const defaultValues = {
    name: "John Snow",
    age: 30,
    document: "12345678901",
    income: 1000,
    city: "Winterfell",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IndividualFormInput>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<IndividualFormInput> = async (data) => {
    try {
      const response = await api.post("/credit-score/person", data);
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
        <label htmlFor="name">Name:</label>
        <input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}{" "}
        <label htmlFor="age">Age:</label>
        <input id="age" {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}{" "}
        <label htmlFor="document">Document:</label>
        <input id="document" {...register("document")} />
        {errors.document && <p>{errors.document.message}</p>}{" "}
        <label htmlFor="income">Income:</label>
        <input id="income" {...register("income")} />
        {errors.income && <p>{errors.income.message}</p>}{" "}
        <label htmlFor="city">City:</label>
        <input id="city" {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>} <input type="submit" />
      </form>
    </div>
  );
};

export default IndividualForm;
