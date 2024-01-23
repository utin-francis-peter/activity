import { TAppState } from "../types/types";

export const INIITIAL_APP_STATE: TAppState = {
  botPosition: {
    x: 0,
    y: 0,
  },
  cookiePosition: {
    x: 0,
    y: 0,
  },
  dimension: {
    cols: 0,
    rows: 0,
  },
  noOfSteps: 0,
  steps: [],
};
