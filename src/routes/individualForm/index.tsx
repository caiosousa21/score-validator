import { Form } from "../../components/Form";
import { schema } from "./schema";

interface IndividualFormInput {
  name: string;
  age: number;
  document: string;
  income: number;
  city: string;
}

const IndividualForm = () => {
  const defaultValues: IndividualFormInput = {
    name: "John Snow",
    age: 30,
    document: "12345678901",
    income: 1000,
    city: "Winterfell",
  };

  return (
    <Form
      defaultValues={defaultValues}
      schema={schema}
      submitUrl="/credit-score/person"
      fields={[
        { name: "name", label: "Name" },
        { name: "age", label: "Age", type: "number" },
        { name: "document", label: "Document" },
        { name: "income", label: "Income", type: "number" },
        { name: "city", label: "City" },
      ]}
    />
  );
};

export default IndividualForm;
