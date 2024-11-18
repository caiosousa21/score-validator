import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Score Validator</h1>
      <section>
        <button onClick={() => navigate(ROUTES.individualForm.path)}>
          Pessoa Física
        </button>
        <button onClick={() => navigate(ROUTES.companyForm.path)}>
          Pessoa Jurídica
        </button>
      </section>
    </div>
  );
};

export default Home;
