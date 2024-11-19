import {
  useForm,
  SubmitHandler,
  Path,
  FieldValues,
  DefaultValues,
  Resolver,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";

interface FormProps<T extends FieldValues> {
  defaultValues: DefaultValues<T>;
  schema: yup.ObjectSchema<T>;
  submitUrl: string;
  formType: "companyForm" | "individualForm";
  fields: {
    name: Path<T>;
    label: string;
    type?: string;
  }[];
}

export const Form = <T extends Record<string, any>>({
  defaultValues,
  schema,
  submitUrl,
  formType,
  fields,
}: FormProps<T>) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(schema) as unknown as Resolver<T, any>,
    defaultValues,
  });

  const onSubmit: SubmitHandler<T> = async (data) => {
    try {
      const response = await axios.post(submitUrl, data);
      if (response.status === 200) {
        localStorage.setItem("response", JSON.stringify(response.data));
        localStorage.setItem("formType", formType);
        navigate(ROUTES.result.path);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data);
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {fields.map(({ name, label, type = "text" }) => (
        <div key={String(name)}>
          <label htmlFor={String(name)}>{label}</label>
          <input id={String(name)} type={type} {...register(name)} />
          {errors[name] && <p>{(errors[name] as any)?.message}</p>}
        </div>
      ))}
      <input type="submit" />
    </form>
  );
};
