import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import "./styles.css";
import ButtonContainer from "../../components/ButtonContainer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="title-section">
        <h1>Bem vindo ao avaliador de score de crédito</h1>
        <h2>Escolha o tipo de cadastro desejado</h2>
      </section>
      <ButtonContainer>
        <button
          id="individual-button"
          onClick={() => navigate(ROUTES.individualForm.path)}
        >
          Pessoa Física
        </button>
        <button
          id="company-button"
          onClick={() => navigate(ROUTES.companyForm.path)}
        >
          Pessoa Jurídica
        </button>
      </ButtonContainer>
    </main>
  );
};

export default Home;
