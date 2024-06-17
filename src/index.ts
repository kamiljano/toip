export const toIPv4 = (ip: number) => {
  return (
    ((ip >> 24) & 0xff) +
    "." +
    ((ip >> 16) & 0xff) +
    "." +
    ((ip >> 8) & 0xff) +
    "." +
    (ip & 0xff)
  );
}
