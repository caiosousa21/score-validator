import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/index.tsx";
import CPFForm from "./individualForm/index.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario-individual" element={<CPFForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
