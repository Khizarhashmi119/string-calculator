import { add } from "@/string-calculator";
import { describe, expect, it } from "vitest";

describe("add", () => {
  it("test", () => {
    expect(add("")).toBe(0);
  });
});
