import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES_LOOKUP } from "../utils/routesLookup";
import ROUTES from "./routes";

interface RedirectRoutesProps {
  children: JSX.Element;
}

function RedirectRoutes({ children }: RedirectRoutesProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const matchedRoute = ROUTES_LOOKUP[location.pathname];

  useEffect(() => {
    const response = localStorage.getItem("response");
    if (
      response &&
      location.pathname !== ROUTES.result.path &&
      location.pathname !== ROUTES.analysis.path
    ) {
      navigate(ROUTES.result.path, { replace: true });
    }
    if (
      matchedRoute === undefined ||
      (!response && location.pathname === ROUTES.result.path)
    ) {
      navigate(ROUTES.home.path, { replace: true });
    }
  }, [location.pathname, navigate, matchedRoute]);

  return children;
}

export default RedirectRoutes;
