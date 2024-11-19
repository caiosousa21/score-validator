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
import { useSubmitForm } from "../../hooks/useSubmitForm";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(schema) as unknown as Resolver<T, any>,
    defaultValues,
  });
  const { onSubmit } = useSubmitForm();

  const handleFormSubmit: SubmitHandler<T> = (data) => {
    onSubmit(data, submitUrl, formType);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
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
