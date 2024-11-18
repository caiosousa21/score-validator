import { useLocation, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";
import "./index.css";
import { BsArrowReturnLeft } from "react-icons/bs";

const ROUTES_LOOKUP = Object.fromEntries(
  Object.values(ROUTES).map((route) => [route.path, route])
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const matchedRoute = ROUTES_LOOKUP[location.pathname];

  return (
    <header>
      {location.pathname !== "/" && (
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
