import { add } from "@/string-calculator";
import { describe, expect, it } from "vitest";

describe("add", () => {
  it("Add 3 (,) separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  it("Add 3 (,) separated numbers with \\n handled.", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("Support different delimiter.", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("Handle negative number with exception.", () => {
    expect(() => add("//;\n1;-2")).toThrow("negative numbers not allowed -2");
  });

  it("Handle multiple negative numbers with exception.", () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2, -3");
  });
});
