export const COLOR = {
  PRIMARY: "#7FFFD4",
  BACKGROUND: "#27292B",
  BORDER: "#37383B",
  TEXT: "white",
  ERROR: "#FA8072",
} as const;

const border = 3;
export const SIZE = {
  border,
  boldBorder: border * 3,
} as const;
