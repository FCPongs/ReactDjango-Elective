import React from "react";
import { render } from "@testing-library/react";
import ApplicationForm from "../Components/ApplicationForm";

test("renders the Adoption Form title", () => {
  const { getByText } = render(<ApplicationForm />);
  const titleElement = getByText("Adoption Form");
  expect(titleElement).toBeInTheDocument();
});

test("checks if the name input field exists", () => {
  const { getByPlaceholderText } = render(<ApplicationForm />);
  const nameInput = getByPlaceholderText("Name");
  expect(nameInput).toBeInTheDocument();
});

// Add more test cases as needed