import Table from "../../components/Table";

interface Person {
  income: number;
  city: string;
  name: string;
  age: number;
  document: string;
}

interface CreditResult {
  max_amount?: number;
  status: string;
}

interface PersonRow {
  person: Person;
  credit_result: CreditResult;
}

const PersonsTable = ({ data }: { data: PersonRow[] }) => {
  const columns = [
    { header: "Name", accessor: (row: PersonRow) => row.person.name },
    { header: "Age", accessor: (row: PersonRow) => row.person.age },
    { header: "City", accessor: (row: PersonRow) => row.person.city },
    { header: "Income", accessor: (row: PersonRow) => row.person.income },
    { header: "Document", accessor: (row: PersonRow) => row.person.document },
    {
      header: "Credit Status",
      accessor: (row: PersonRow) => row.credit_result.status,
    },
    {
      header: "Max Amount",
      accessor: (row: PersonRow) => row.credit_result.max_amount ?? "N/A",
    },
  ];

  return <Table<PersonRow> data={data} columns={columns} />;
};

export default PersonsTable;
