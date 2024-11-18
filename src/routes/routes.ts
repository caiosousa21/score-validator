import Home from "./home/index.tsx";
import IndividualForm from "./individualForm/index.tsx";
import CompanyForm from "./companyForm/index.tsx";

const ROUTES: Record<string, { path: string; component: React.ComponentType }> =
  {
    home: {
      path: "/",
      component: Home,
    },
    individualForm: {
      path: "/formulario-individual",
      component: IndividualForm,
    },
    companyForm: {
      path: "/formulario-empresarial",
      component: CompanyForm,
    },
  };

export default ROUTES;
