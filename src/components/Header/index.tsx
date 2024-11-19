import { useLocation, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";
import "./styles.css";
import { BsArrowReturnLeft } from "react-icons/bs";
import { ROUTES_LOOKUP } from "../../utils/routesLookup";
import { exceptionRoutes } from "./exceptionRoutes";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const matchedRoute = ROUTES_LOOKUP[location.pathname];
  const isExceptionRoute = exceptionRoutes.includes(location.pathname);

  return (
    <header>
      {!isExceptionRoute && (
        <BsArrowReturnLeft
          className="back-button"
          role="button"
          size={32}
          onClick={() => navigate(ROUTES.home.path)}
        />
      )}
      {matchedRoute?.name || "Unknown Route"}
    </header>
  );
};

export default Header;
