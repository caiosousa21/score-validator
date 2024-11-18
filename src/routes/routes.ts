import Home from "./home/index.tsx";
import CPFForm from "./individualForm/index.tsx";

const ROUTES: Record<string, { path: string; component: React.ComponentType }> =
  {
    home: {
      path: "/",
      component: Home,
    },
    individualForm: {
      path: "/formulario-individual",
      component: CPFForm,
    },
  };

export default ROUTES;
