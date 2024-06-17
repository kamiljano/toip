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
