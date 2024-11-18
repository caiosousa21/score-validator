import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./routes.ts";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(ROUTES).map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
