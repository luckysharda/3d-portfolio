import { describe, it, expect } from "vitest";
import { calculateSizes } from "./index";

// calculateSizes() drives all responsive 3D placement in the Hero.
// These tests pin down its contract so a refactor can't silently
// break layout on a given breakpoint.

const KEYS = [
  "deskScale",
  "deskPosition",
  "cubePosition",
  "reactLogoPosition",
  "ringPosition",
  "targetPosition",
];

describe("calculateSizes", () => {
  it("returns every layout key for all breakpoints", () => {
    const cases = [
      calculateSizes(true, true, false), // small phone
      calculateSizes(false, true, false), // mobile
      calculateSizes(false, false, true), // tablet
      calculateSizes(false, false, false), // desktop
    ];
    for (const sizes of cases) {
      for (const key of KEYS) {
        expect(sizes).toHaveProperty(key);
      }
    }
  });

  it("uses smaller desk scale on small/mobile than on desktop", () => {
    const small = calculateSizes(true, true, false);
    const desktop = calculateSizes(false, false, false);
    expect(small.deskScale).toBeLessThan(desktop.deskScale);
  });

  it("returns position tuples as [x, y, z] triples of numbers", () => {
    const sizes = calculateSizes(false, false, false);
    const tuples = [
      sizes.deskPosition,
      sizes.cubePosition,
      sizes.reactLogoPosition,
      sizes.ringPosition,
      sizes.targetPosition,
    ];
    for (const tuple of tuples) {
      expect(Array.isArray(tuple)).toBe(true);
      expect(tuple).toHaveLength(3);
      for (const n of tuple) {
        expect(typeof n).toBe("number");
        expect(Number.isFinite(n)).toBe(true);
      }
    }
  });

  it("picks distinct desk positioning for mobile vs desktop", () => {
    const mobile = calculateSizes(false, true, false);
    const desktop = calculateSizes(false, false, false);
    expect(mobile.deskPosition).not.toEqual(desktop.deskPosition);
  });
});
