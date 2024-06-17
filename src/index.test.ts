import { test, describe, expect } from "vitest";
import { toIPv4 } from "./index";

describe("toIPv4", () => {
  test("should convert 0 to 0.0.0.0", () => {
    expect(toIPv4(0)).toBe("0.0.0.0");
  });

  test(`should convert ${Number.MAX_SAFE_INTEGER} to 255.255.255.255`, () => {
    expect(toIPv4(Number.MAX_SAFE_INTEGER)).toBe("255.255.255.255");
  });
});
