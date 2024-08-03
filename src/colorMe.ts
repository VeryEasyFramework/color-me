import { colors } from "./colors.ts";
import type { ColorMe, ColorName, ColorOptions } from "./types.ts";

const color = (message: string, color: ColorName, options?: ColorOptions) => {
  if (options?.bold) {
    message = `${colors.bold}${message}`;
  }
  if (options?.italic) {
    message = `${colors.italic}${message}`;
  }
  if (options?.underline) {
    message = `${colors.underscore}${message}`;
  }

  if (options?.strikethrough) {
    message = `${colors.strikethrough}${message}`;
  }
  if (options?.bgColor) {
    message = `${colors[options.bgColor]}${message}`;
  }
  if (options?.inverse) {
    message = `${colors.reverse}${message}`;
  }

  return `${colors[color]}${message}${colors.reset}`;
};

/**
 * ColorMe is a utility to colorize your terminal output.
 *
 * @example
 * ```ts
 * import { colorMe } from "@vef/color-me";
 *
 * const message = colorMe.green("Hello, World!");
 * console.log(message);
 * ```
 */
const colorMe: ColorMe = {} as ColorMe;

for (const colorName in colors) {
  colorMe[colorName as ColorName] = (message: string, options?: ColorOptions) =>
    color(message, colorName as ColorName, options);
}
export { colorMe };
