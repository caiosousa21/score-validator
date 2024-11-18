import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header onClick={() => navigate(ROUTES.home.path)}>Score Validator</header>
  );
};

export default Header;
