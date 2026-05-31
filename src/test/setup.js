import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// jsdom doesn't implement matchMedia; ThemeContext reads it for the
// system color-scheme preference. Provide a minimal stub (defaults to
// "no match" so the saved/default theme path is exercised).
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated but some libs still call it
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

// Unmount React trees and reset the DOM between tests.
afterEach(() => {
  cleanup();
});
