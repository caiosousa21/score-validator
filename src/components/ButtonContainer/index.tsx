import "./styles.css";

interface ButtonContainerProps {
  children: React.ReactNode;
}

function ButtonContainer({ children }: ButtonContainerProps) {
  return <section className="button-container">{children}</section>;
}

export default ButtonContainer;
