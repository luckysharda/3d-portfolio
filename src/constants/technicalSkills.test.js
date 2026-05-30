import { describe, it, expect } from "vitest";
import { technicalSkills } from "./index";

// The About section maps over technicalSkills and uses `category` as a
// React key and `skill` as a key inside it. These tests guard that shape
// so a bad data edit fails fast instead of rendering a broken list.

describe("technicalSkills", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(technicalSkills)).toBe(true);
    expect(technicalSkills.length).toBeGreaterThan(0);
  });

  it("every group has a string category and a non-empty skills array", () => {
    for (const group of technicalSkills) {
      expect(typeof group.category).toBe("string");
      expect(group.category.length).toBeGreaterThan(0);
      expect(Array.isArray(group.skills)).toBe(true);
      expect(group.skills.length).toBeGreaterThan(0);
      for (const skill of group.skills) {
        expect(typeof skill).toBe("string");
        expect(skill.length).toBeGreaterThan(0);
      }
    }
  });

  it("has unique category names (used as React keys)", () => {
    const categories = technicalSkills.map((g) => g.category);
    expect(new Set(categories).size).toBe(categories.length);
  });
});
