import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import * as yup from "yup";
import { MemoryRouter } from "react-router-dom";
import { Form } from "../components/Form";

// Mock `useSubmitForm` hook
const mockOnSubmit = vi.fn();
vi.mock("../hooks/useSubmitForm", () => ({
  useSubmitForm: vi.fn(() => ({
    onSubmit: mockOnSubmit,
  })),
}));

describe("Form Component", () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup.number().required("Age is required").positive().integer(),
  });

  const defaultValues = {
    name: "",
    age: "",
  };

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "age", label: "Age", type: "number" },
  ];

  const submitUrl = "/submit";
  const formType = "individualForm";

  it("renders the form fields", () => {
    render(
      <MemoryRouter>
        <Form
          defaultValues={defaultValues}
          schema={schema}
          submitUrl={submitUrl}
          formType={formType}
          fields={fields}
        />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Age")).toBeInTheDocument();
  });

  it("displays validation errors for invalid inputs", async () => {
    render(
      <MemoryRouter>
        <Form
          defaultValues={defaultValues}
          schema={schema}
          submitUrl={submitUrl}
          formType={formType}
          fields={fields}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
      expect(
        screen.getByText(
          /age must be a `number` type, but the final value was/i
        )
      ).toBeInTheDocument();
    });
  });

  it("calls onSubmit with the correct data when valid inputs are provided", async () => {
    render(
      <MemoryRouter>
        <Form
          defaultValues={defaultValues}
          schema={schema}
          submitUrl={submitUrl}
          formType={formType}
          fields={fields}
        />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByLabelText("Age"), { target: { value: "30" } });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        { name: "John", age: 30 },
        submitUrl,
        formType
      );
    });
  });
});
