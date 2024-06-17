import { test, describe, expect } from "vitest";
import { ipv4ToNumber, ipv6ToBigInt, toIPv4, toIPv6 } from "../src/index";

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

describe("toIPv6", () => {
  test("for -1 should throw an error", () => {
    expect(() => toIPv6(BigInt(-1))).toThrow(
      `Invalid IP address. Must be between 0 and 340282366920938463463374607431768211455.`,
    );
  });

  test("for 340282366920938463463374607431768211456 should throw an error", () => {
    expect(() =>
      toIPv6(BigInt("340282366920938463463374607431768211456")),
    ).toThrow(
      `Invalid IP address. Must be between 0 and 340282366920938463463374607431768211455.`,
    );
  });

  test("should convert 0 to ::", () => {
    expect(toIPv6(BigInt(0))).toBe("::");
  });

  test("should convert 340282366920938463463374607431768211455 to ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff", () => {
    expect(toIPv6(BigInt("340282366920938463463374607431768211455"))).toBe(
      "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
    );
  });
});

describe("ipv6ToBigInt", () => {
  test("should convert 0000:0000:0000:0000:0000:0000:0000:0000 to 0", () => {
    expect(ipv6ToBigInt("::")).toBe(BigInt(0));
  });

  test("should convert :: to 0", () => {
    expect(ipv6ToBigInt("::")).toBe(BigInt(0));
  });

  test("should convert ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff to 340282366920938463463374607431768211455", () => {
    expect(ipv6ToBigInt("ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff")).toBe(
      BigInt("340282366920938463463374607431768211455"),
    );
  });
});
