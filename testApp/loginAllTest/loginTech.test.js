import { render, screen } from "@testing-library/react";
import TechLogin from "../../src/Login/componentForLogin/TECH/Programming/TechLogin";
import { expect, test } from "vitest";

test("test {topic} input", () => {
  render(<TechLogin />);
  let inputTopic = screen.getByPlaceholderText("Enter Topic");
  expect(inputTopic).toBeInTheDocument();
});
