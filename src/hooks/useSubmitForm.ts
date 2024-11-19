import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routes";

export const useSubmitForm = <T>() => {
  const navigate = useNavigate();

  const onSubmit = async (
    data: T,
    submitUrl: string,
    formType: string
  ): Promise<void> => {
    try {
      const response = await axios.post(submitUrl, data);
      if (response.status === 200) {
        localStorage.setItem("response", JSON.stringify(response.data));
        localStorage.setItem("formType", formType);
        navigate(ROUTES.result.path);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data);
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return { onSubmit };
};
