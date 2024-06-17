import { test, describe, expect } from "vitest";
import { ipv4ToNumber, toIPv4 } from "../src/index";

describe("toIPv4", () => {
  test("for -1 should throw an error", () => {
    expect(() => toIPv4(-1)).toThrow(
      "Invalid IP address. Must be between 0 and 4294967295.",
    );
  });

  test("should convert 0 to 0.0.0.0", () => {
    expect(toIPv4(0)).toBe("0.0.0.0");
  });

  test(`should convert 4294967295 to 255.255.255.255`, () => {
    expect(toIPv4(4294967295)).toBe("255.255.255.255");
  });
});

describe("ipv4ToNumber", () => {
  test("for invalid IP address should throw error", () => {
    expect(() => ipv4ToNumber("0.0.0")).toThrow(
      "Invalid IP address. Must have 4 parts separated by dots.",
    );
  });

  test("when the parts are too large, should throw error", () => {
    expect(() => ipv4ToNumber("0.0.0.256")).toThrow(
      "Invalid IP address. Each part must be an integer between 0 and 255.",
    );
  });

  test("for 0.0.0.0 should return 0", () => {
    const result = ipv4ToNumber("0.0.0.0");

    expect(result).toBe(0);
  });

  test("for 255.255.255.255 should return 9007199254740991", () => {
    const result = ipv4ToNumber("255.255.255.255");

    expect(result).toBe(4294967295);
  });
});
