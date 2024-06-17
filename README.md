# ToIp

A utility allowing an easy conversion between IP addresses and integers.

An IPv4 address is technically a 32-bit integer that is commonly represented by a string in the format 0.0.0.0.
Similarly, IPv6 addresses are 128-bit integers that are commonly represented by a string in the format 0:0:0:0:0:0:0:0.

The ability to convert between these two representations make it easier to
iterate over a large number of IP addresses.

## Installation

```bash
npm install toip
yarn add toip
pnpm add toip
```

## Usage

### JavaScript example

```javascript
const { toIPv4 } = require('toip');

console.log(toIPv4(0)); //prints out 0.0.0.0
console.log(toIPv4(1)); //prints out 0.0.0.1
console.log(toIPv4(4294967295)); //prints out 255.255.255.255
```

### TypeScript example

```typescript
import { toIPv4 } from 'toip';

console.log(toIPv4(0)); //prints out 0.0.0.0
console.log(toIPv4(1)); //prints out 0.0.0.1
console.log(toIPv4(4294967295)); //prints out 255.255.255.255
```

## Functions

- `toIPv4(number)` - Converts a number to an IPv4 address represented as string in format `0.0.0.0`.
- `ipv4ToNumber(string)` - takes in an IPv4 address represented as a string in format `0.0.0.0` and returns the number representation.
- `toIPv6(bigint)` - Converts a number to an IPv6 address represented as string in format `fff:ffff:ffff:ffff:ffff:ffff:ffff:ffff` or just `::` for the shorthand representation.
- `ipv6ToNumber(string)` - Converts an IPv6 address string and converts it to a `bigint` number.
