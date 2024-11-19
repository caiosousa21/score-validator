import { useNavigate } from "react-router-dom";
import statusComponents from "../routes/result/statusComponent";
import ROUTES from "../routes/routes";

interface ResponseData {
  status: "APPROVED" | "DENIED";
  max_amount?: number;
  [key: string]: any;
}

export const useResult = () => {
  const navigate = useNavigate();
  const response = localStorage.getItem("response");
  const formType = localStorage.getItem("formType") as keyof typeof ROUTES;

  let parsedResponse: ResponseData | null = null;

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

  return { parsedResponse, handleRetryClick, StatusComponent };
};
