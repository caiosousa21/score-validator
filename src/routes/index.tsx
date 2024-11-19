import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./routes.ts";
import Header from "../components/Header/index.tsx";
import RedirectRoutes from "./RedirectRoutes.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <RedirectRoutes>
        <Routes>
          {Object.values(ROUTES).map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </RedirectRoutes>
    </BrowserRouter>
  );
}

export default Router;
