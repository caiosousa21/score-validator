import { Form } from "../../components/Form";
import ENDPOINTS from "../../utils/endpoints";
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
    <main>
      <Form
        defaultValues={defaultValues}
        schema={schema}
        submitUrl={ENDPOINTS.companyScore.url}
        formType="companyForm"
        fields={[
          { name: "name", label: "Razão social" },
          { name: "document", label: "Document" },
          { name: "revenue", label: "Revenue", type: "number" },
          { name: "city", label: "City" },
        ]}
      />
    </main>
  );
};

export default CompanyForm;
