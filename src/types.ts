import type { colors } from "./colors.ts";

/**
 * The typed color names.
 */
export type ColorName = keyof typeof colors;

/**
 * The color function to colorize the message.
 */
export type ColorFunction = (message: string, options?: ColorOptions) => string;

/**
 * The main colorMe object.
 */
export type ColorMe = Record<ColorName, ColorFunction>;

/**
 * The  options to pass to the colorMe function to style the message.
 */
export interface ColorOptions {
  bgColor?: ColorName;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  inverse?: boolean;
  strikethrough?: boolean;
}
