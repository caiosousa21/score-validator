import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES_LOOKUP } from "../utils/routesLookup";

interface RedirectRoutesProps {
  children: JSX.Element;
}

function RedirectRoutes({ children }: RedirectRoutesProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const matchedRoute = ROUTES_LOOKUP[location.pathname];

  useEffect(() => {
    const response = localStorage.getItem("response");
    if (response && location.pathname !== "/resultado") {
      navigate("/resultado", { replace: true });
    }
    if (matchedRoute === undefined) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate, matchedRoute]);

  return children;
}

export default RedirectRoutes;
