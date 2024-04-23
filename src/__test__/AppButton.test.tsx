import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AppButton from "../components/button/AppButton";

describe("IncreaseButton", () => {
  test("renders", () => {
    render(<AppButton />);
    expect(screen.getByText("Hello")).toBeDefined();
  });
});
