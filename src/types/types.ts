export type TPosition = {
  x: number;
  y: number;
};

export type TDimension = {
  rows: number;
  cols: number;
};

export type TAppState = {
  dimension: TDimension;
  botPosition: TPosition;
  cookiePosition: TPosition;
  steps: TStep[];
};
export type TStep = "Move Left" | "Move Right" | "Move Up" | "Move Down";

export type TButton = {
  children: string;
  onClick: () => TPosition;
};

export type THandleGameInputs =
  | { action: "clear-steps"; payload: undefined }
  | { action: "add-step"; payload: TStep }
  | { action: "set-rows" | "set-cols" | "set-step-count"; payload: number }
  | { action: "setBotPosition" | "setCookiePosition"; payload: TPosition };
