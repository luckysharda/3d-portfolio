import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeContext";

// Small probe component that surfaces the context + a toggle trigger.
const Probe = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} data-testid="probe">
      {theme}
    </button>
  );
};

describe("ThemeContext", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.className = "";
  });

  it("defaults to a valid theme and exposes it via context", () => {
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    );
    expect(["dark", "light"]).toContain(
      screen.getByTestId("probe").textContent
    );
  });

  it("toggles the theme and reflects it on <html> + localStorage", () => {
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    );
    const btn = screen.getByTestId("probe");
    const before = btn.textContent;

    act(() => btn.click());

    const after = btn.textContent;
    expect(after).not.toBe(before);
    expect(window.localStorage.getItem("theme")).toBe(after);
    expect(document.documentElement.classList.contains(after)).toBe(true);
  });
});
