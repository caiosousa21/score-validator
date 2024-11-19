import Home from "./home/index.tsx";
import IndividualForm from "./individualForm/index.tsx";
import CompanyForm from "./companyForm/index.tsx";
import Result from "./result/index.tsx";

const ROUTES: Record<
  string,
  { name: string; path: string; component: React.ComponentType }
> = {
  home: {
    name: "Inicio",
    path: "/",
    component: Home,
  },
  individualForm: {
    name: "Formulário Individual",
    path: "/formulario-individual",
    component: IndividualForm,
  },
  companyForm: {
    name: "Formulário Empresarial",
    path: "/formulario-empresarial",
    component: CompanyForm,
  },
  result: {
    name: "Resultados",
    path: "/resultado",
    component: Result,
  },
};

export default ROUTES;
