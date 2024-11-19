import ButtonContainer from "../../components/ButtonContainer";
import { useResult } from "../../hooks/useResult";

function Result() {
  const {
    parsedResponse,
    handleRetryClick,
    handleAnalysisClick,
    StatusComponent,
  } = useResult();

  return StatusComponent ? (
    <main>
      <StatusComponent {...parsedResponse} />
      <ButtonContainer>
        <button onClick={handleRetryClick}>Checar Score Novamente</button>
        <button onClick={handleAnalysisClick}>
          Checar análise de créditos
        </button>
      </ButtonContainer>
    </main>
  ) : (
    <main>Loading or Unknown Status</main>
  );
}

export default Result;
