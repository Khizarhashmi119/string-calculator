import { add } from "@/string-calculator";
import { describe, expect, it } from "vitest";

describe("add", () => {
  it("Add 3 (,) separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  it("Add 3 (,) separated numbers with \\n handled.", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
