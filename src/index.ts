/**
 * An IP v4 address is a 32-bit number that is usually represented as a string in the form of `a.b.c.d` where `a`, `b`, `c`, and `d` are integers between 0 and 255.
 *
 * The following function converts a 32-bit number to an IP v4 address.
 * @param ip - The IP address in a format of a 32-bit number - must be between 0 and 9007199254740991 (Number.MAX_SAFE_INTEGER)
 */
export const toIPv4 = (ip: number) => {
  if (ip < 0 || ip > Number.MAX_SAFE_INTEGER) {
    throw new Error(
      "Invalid IP address. Must be between 0 and 9007199254740991.",
    );
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
