import { Form } from "../../components/Form";
import { schema } from "./schema";

interface CompanyFormInput {
  name: string;
  document: string;
  revenue: number;
  city: string;
}

const CompanyForm = () => {
  const defaultValues: CompanyFormInput = {
    name: "Borracharia dois irmãos",
    document: "00000000000000",
    revenue: 10000,
    city: "Ibitinga",
  };

  return (
    <Form
      defaultValues={defaultValues}
      schema={schema}
      submitUrl="/credit-score/company"
      fields={[
        { name: "name", label: "Razão social" },
        { name: "document", label: "Document" },
        { name: "revenue", label: "Revenue", type: "number" },
        { name: "city", label: "City" },
      ]}
    />
  );
};

export default CompanyForm;
