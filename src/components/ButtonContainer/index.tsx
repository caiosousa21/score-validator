import "./styles.css";

function ButtonContainer({ children }: { children: React.ReactNode }) {
  return <section className="button-container">{children}</section>;
}

export default ButtonContainer;
