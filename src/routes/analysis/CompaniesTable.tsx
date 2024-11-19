import Table from "../../components/Table";

interface Company {
  revenue: number;
  city: string;
  name: string;
  document: string;
}

interface CreditResult {
  max_amount?: number;
  status: string;
}

interface CompanyRow {
  company: Company;
  credit_result: CreditResult;
}

const CompaniesTable = ({ data }: { data: CompanyRow[] }) => {
  const columns = [
    { header: "Name", accessor: (row: CompanyRow) => row.company.name },
    { header: "City", accessor: (row: CompanyRow) => row.company.city },
    { header: "Revenue", accessor: (row: CompanyRow) => row.company.revenue },
    { header: "Document", accessor: (row: CompanyRow) => row.company.document },
    {
      header: "Credit Status",
      accessor: (row: CompanyRow) => row.credit_result.status,
    },
    {
      header: "Max Amount",
      accessor: (row: CompanyRow) => row.credit_result.max_amount ?? "N/A",
    },
  ];

  return <Table<CompanyRow> data={data} columns={columns} />;
};

export default CompaniesTable;
