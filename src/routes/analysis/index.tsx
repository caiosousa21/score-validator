import PersonsTable from "./PersonsTable";
import CompaniesTable from "./CompaniesTable";
import { useCreditAnalysis } from "../../hooks/useCreditAnalysis";

function CreditAnalysis() {
  const { data, loading } = useCreditAnalysis();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Credit Analysis</h1>
      <h2>Persons</h2>
      <PersonsTable data={data.persons} />
      <h2>Companies</h2>
      <CompaniesTable data={data.companies} />
    </div>
  );
}

export default CreditAnalysis;
