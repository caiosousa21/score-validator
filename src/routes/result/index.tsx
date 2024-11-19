import { useResult } from "../../hooks/useResult";

function Result() {
  const {
    parsedResponse,
    handleRetryClick,
    handleAnalysisClick,
    StatusComponent,
  } = useResult();

  return StatusComponent ? (
    <div>
      <StatusComponent {...parsedResponse} />
      <button onClick={handleRetryClick}>Checar Score Novamente</button>
      <button onClick={handleAnalysisClick}>Ver Requerimentos</button>
    </div>
  ) : (
    <div>Loading or Unknown Status</div>
  );
}

export default Result;
