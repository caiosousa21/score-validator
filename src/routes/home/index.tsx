import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Score Validator</h1>
      <section>
        <button onClick={() => navigate("/formulario-individual")}>
          Pessoa Física
        </button>
        <button>Pessoa Jurídica</button>
      </section>
    </div>
  );
};

export default Home;
