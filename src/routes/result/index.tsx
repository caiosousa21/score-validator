import { useNavigate } from "react-router-dom";

interface ResponseData {
  status: "APPROVED" | "DENIED";
  max_amount?: number;
  [key: string]: any;
}

const Approved = () => {
  return <div>Approved</div>;
};

const Denied = () => {
  return <div>Denied</div>;
};

const statusComponents: Record<ResponseData["status"], React.FC> = {
  APPROVED: Approved,
  DENIED: Denied,
};

function Result() {
  const navigate = useNavigate();
  const response = localStorage.getItem("response");
  let parsedResponse: ResponseData | null = null;

  if (response !== null) {
    try {
      parsedResponse = JSON.parse(response);
    } catch (error) {
      console.error("Failed to parse response:", error);
    }
  }

  const StatusComponent = parsedResponse?.status
    ? statusComponents[parsedResponse.status]
    : null;
  const handleRetryClick = () => {
    localStorage.removeItem("response");
    navigate(-1);
  };

  return StatusComponent ? (
    <div>
      <StatusComponent />
      <button onClick={handleRetryClick}>Checar Score Novamente</button>
    </div>
  ) : (
    <div>Loading or Unknown Status</div>
  );
}

export default Result;
