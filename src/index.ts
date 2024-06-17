const max32BitInteger = 4294967295;

/**
 * An IP v4 address is a 32-bit number that is usually represented as a string in the form of `a.b.c.d` where `a`, `b`, `c`, and `d` are integers between 0 and 255.
 *
 * The following function converts a 32-bit number to an IP v4 address.
 * @param ip - The IP address in a format of a 32-bit number - must be between 0 and 9007199254740991 (Number.MAX_SAFE_INTEGER)
 */
export const toIPv4 = (ip: number) => {
  if (ip < 0 || ip > max32BitInteger) {
    throw new Error("Invalid IP address. Must be between 0 and 4294967295.");
  }
  return (
    ((ip >> 24) & 0xff) +
    "." +
    ((ip >> 16) & 0xff) +
    "." +
    ((ip >> 8) & 0xff) +
    "." +
    (ip & 0xff)
  );
};

/**
 * Converts IPv4 to a 32-bit number.
 * @param ip - The IP address in the format number.number.number.number
 */
export const ipv4ToNumber = (ip: string) => {
  const parts = ip.split(".");
  if (parts.length !== 4) {
    throw new Error("Invalid IP address. Must have 4 parts separated by dots.");
  }

  const partNumbers = parts.map((part) => parseInt(part, 10));
  if (partNumbers.some((part) => isNaN(part) || part < 0 || part > 255)) {
    throw new Error(
      "Invalid IP address. Each part must be an integer between 0 and 255.",
    );
  }

  return (
    ((partNumbers[0] << 24) >>> 0) +
    ((partNumbers[1] << 16) >>> 0) +
    ((partNumbers[2] << 8) >>> 0) +
    partNumbers[3]
  );
};

const max128BitInteger = BigInt("340282366920938463463374607431768211455");
const bigZero = BigInt(0);

const shortenIpV6 = (ip: string[]) => {
  const result = ip
    .map((part) => {
      for (let i = 0; i < part.length; i++) {
        if (part[i] !== "0") {
          return part.substring(i);
        }
      }
      return part === "0000" ? "" : part;
    })
    .join(":");

  return result === ":::::::" ? "::" : result;
};

/**
 * Converts a 128-bit number to an IPv6 address.
 * @param ip - The numeric representation of the IPv6 address between 0 and 340282366920938463463374607431768211455
 *             Use the BigInt function to create a number larger than Number.MAX_SAFE_INTEGER
 */
export const toIPv6 = (ip: bigint): string => {
  if (ip < bigZero || ip > max128BitInteger) {
    throw new Error(
      `Invalid IP address. Must be between 0 and ${max128BitInteger}.`,
    );
  }
  let hex = ip.toString(16).padStart(32, "0");
  let ipv6: string[] = [];
  for (let i = 0; i < 32; i += 4) {
    ipv6.push(hex.substring(i, i + 4));
  }

  return shortenIpV6(ipv6);
};

/**
 * Converts an IPv6 address to a number.
 *
 * @param ip - The IPv6 address
 * @returns bigint representation of the IPv6 address
 */
export const ipv6ToNumber = (ip: string): bigint => {
  const segments = ip.split(":");
  let hex = "";
  for (let i = 0; i < segments.length; i++) {
    hex += segments[i].padStart(4, "0");
  }
  return BigInt("0x" + hex);
};
