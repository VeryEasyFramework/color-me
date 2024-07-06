# Color Me

A simple utility to colorize foreground and/or background text with ANSI escape
codes

## Usage

1. Add the package to your project:

```bash
deno add @eveffer/color-me
```

2. Import the package and use it:

```typescript
import { colorMe } from "@eveffer/color-me";

const message = colorMe.green("Hello, world!");
console.log(message);
```
