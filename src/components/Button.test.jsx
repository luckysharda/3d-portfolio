import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders its name as the button label", () => {
    render(<Button name="Let's work together" />);
    expect(
      screen.getByRole("button", { name: /let's work together/i })
    ).toBeInTheDocument();
  });

  it("applies the containerClass alongside the base btn class", () => {
    render(<Button name="Contact Me" containerClass="w-full mt-10" />);
    const btn = screen.getByRole("button", { name: /contact me/i });
    expect(btn).toHaveClass("btn");
    expect(btn).toHaveClass("w-full");
    expect(btn).toHaveClass("mt-10");
  });

  it("renders the beam indicator only when isBeam is set", () => {
    const { container, rerender } = render(<Button name="No beam" />);
    expect(container.querySelector(".btn-ping")).toBeNull();

    rerender(<Button name="With beam" isBeam />);
    expect(container.querySelector(".btn-ping")).not.toBeNull();
  });
});
