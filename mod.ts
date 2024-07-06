const reset = "\x1b[0m";
const bright = "\x1b[1m";
const dim = "\x1b[2m";
const underscore = "\x1b[4m";
const blink = "\x1b[5m";
const reverse = "\x1b[7m";
const hidden = "\x1b[8m";
const fgBlack = "\x1b[30m";
const fgRed = "\x1b[31m";
const fgGreen = "\x1b[32m";
const fgYellow = "\x1b[33m";
const fgBlue = "\x1b[34m";
const fgMagenta = "\x1b[35m";
const fgCyan = "\x1b[36m";
const fgWhite = "\x1b[37m";
const fgGray = "\x1b[90m";
const bgBlack = "\x1b[40m";
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgBlue = "\x1b[44m";
const bgMagenta = "\x1b[45m";
const bgCyan = "\x1b[46m";
const bgWhite = "\x1b[47m";
const bgGray = "\x1b[100m";
const brightBlack = "\x1b[90m";
const brightRed = "\x1b[91m";
const brightGreen = "\x1b[92m";
const brightYellow = "\x1b[93m";
const brightBlue = "\x1b[94m";
const brightMagenta = "\x1b[95m";
const brightCyan = "\x1b[96m";
const brightWhite = "\x1b[97m";
const bgBrightBlack = "\x1b[100m";
const bgBrightRed = "\x1b[101m";
const bgBrightGreen = "\x1b[102m";
const bgBrightYellow = "\x1b[103m";
const bgBrightBlue = "\x1b[104m";
const bgBrightMagenta = "\x1b[105m";
const bgBrightCyan = "\x1b[106m";
const bgBrightWhite = "\x1b[107m";

const colors = {
  reset,
  bright,
  dim,
  underscore,
  blink,
  reverse,
  hidden,
  fgBlack,
  fgRed,
  fgGreen,
  fgYellow,
  fgBlue,
  fgMagenta,
  fgCyan,
  fgWhite,
  fgGray,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  bgGray,
  brightBlack,
  brightRed,
  brightGreen,
  brightYellow,
  brightBlue,
  brightMagenta,
  brightCyan,
  brightWhite,
  bgBrightBlack,
  bgBrightRed,
  bgBrightGreen,
  bgBrightYellow,
  bgBrightBlue,
  bgBrightMagenta,
  bgBrightCyan,
  bgBrightWhite,
};

const color = (message: string, color: keyof typeof colors) => {
  return `${colors[color]}${message}${colors.reset}`;
};

export const colorMe = {
  red(message: string) {
    return color(message, "fgRed");
  },
  green(message: string) {
    return color(message, "fgGreen");
  },
  yellow(message: string) {
    return color(message, "fgYellow");
  },
  blue(message: string) {
    return color(message, "fgBlue");
  },
  magenta(message: string) {
    return color(message, "fgMagenta");
  },
  cyan(message: string) {
    return color(message, "fgCyan");
  },
  white(message: string) {
    return color(message, "fgWhite");
  },
  gray(message: string) {
    return color(message, "fgGray");
  },
  brightRed(message: string) {
    return color(message, "brightRed");
  },
  brightGreen(message: string) {
    return color(message, "brightGreen");
  },
  brightYellow(message: string) {
    return color(message, "brightYellow");
  },
  brightBlue(message: string) {
    return color(message, "brightBlue");
  },
  brightMagenta(message: string) {
    return color(message, "brightMagenta");
  },
  brightCyan(message: string) {
    return color(message, "brightCyan");
  },
  brightWhite(message: string) {
    return color(message, "brightWhite");
  },
  bgBlack(message: string) {
    return color(message, "bgBlack");
  },
  bgRed(message: string) {
    return color(message, "bgRed");
  },
  bgGreen(message: string) {
    return color(message, "bgGreen");
  },
  bgYellow(message: string) {
    return color(message, "bgYellow");
  },
  bgBlue(message: string) {
    return color(message, "bgBlue");
  },
  bgMagenta(message: string) {
    return color(message, "bgMagenta");
  },
  bgCyan(message: string) {
    return color(message, "bgCyan");
  },
  bgWhite(message: string) {
    return color(message, "bgWhite");
  },
  bgGray(message: string) {
    return color(message, "bgGray");
  },
  bgBrightRed(message: string) {
    return color(message, "bgBrightRed");
  },
  bgBrightGreen(message: string) {
    return color(message, "bgBrightGreen");
  },
  bgBrightYellow(message: string) {
    return color(message, "bgBrightYellow");
  },
  bgBrightBlue(message: string) {
    return color(message, "bgBrightBlue");
  },
  bgBrightMagenta(message: string) {
    return color(message, "bgBrightMagenta");
  },
  bgBrightCyan(message: string) {
    return color(message, "bgBrightCyan");
  },
  bgBrightWhite(message: string) {
    return color(message, "bgBrightWhite");
  },
};
