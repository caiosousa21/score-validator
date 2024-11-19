import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";

interface ResponseData {
  status: "APPROVED" | "DENIED";
  max_amount?: number;
  [key: string]: any;
}

const Approved = ({ max_amount }: { max_amount?: number }) => {
  return (
    <div>
      <h2>Approved</h2>
      <p>Max Amount: {max_amount !== undefined ? max_amount : "N/A"}</p>
    </div>
  );
};

const Denied = () => {
  return <h2>Denied</h2>;
};

const statusComponents: Record<ResponseData["status"], React.FC<any>> = {
  APPROVED: Approved,
  DENIED: Denied,
};

function Result() {
  const navigate = useNavigate();
  const response = localStorage.getItem("response");
  let parsedResponse: ResponseData | null = null;
  const formType = localStorage.getItem("formType") as keyof typeof ROUTES;

  if (response !== null) {
    try {
      parsedResponse = JSON.parse(response);
    } catch (error) {
      console.error("Failed to parse response:", error);
    }
  }

  const handleRetryClick = () => {
    const targetRoute =
      formType && ROUTES[formType] ? ROUTES[formType].path : ROUTES.home.path;
    localStorage.removeItem("formType");
    localStorage.removeItem("response");
    navigate(targetRoute);
  };

  const StatusComponent = parsedResponse?.status
    ? statusComponents[parsedResponse.status]
    : null;

  return StatusComponent ? (
    <div>
      <StatusComponent {...parsedResponse} />
      <button onClick={handleRetryClick}>Checar Score Novamente</button>
    </div>
  ) : (
    <div>Loading or Unknown Status</div>
  );
}

export default Result;
