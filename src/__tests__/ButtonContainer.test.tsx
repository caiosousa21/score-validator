import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonContainer from "../components/ButtonContainer";

describe("ButtonContainer", () => {
  it("renders children correctly", () => {
    render(
      <ButtonContainer>
        <button>Click Aqui</button>
      </ButtonContainer>
    );

    expect(screen.getByText("Click Aqui")).toBeInTheDocument();
  });

  it("applies the correct class", () => {
    const { container } = render(
      <ButtonContainer>
        <button>Click Aqui</button>
      </ButtonContainer>
    );

    expect(container.firstChild).toHaveClass("button-container");
  });
});
