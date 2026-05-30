import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Unmount React trees and reset the DOM between tests.
afterEach(() => {
  cleanup();
});
