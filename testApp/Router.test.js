import react from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { describe, test, expect } from "vitest";

describe("app", () => {
  test("render Home component by default", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByText("Home")).toBeInTheDocument();
  });
});
