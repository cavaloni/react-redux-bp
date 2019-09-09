export const HAPPY_ACTION = "HAPPY_ACTION";

export function happyAction(payload) {
  return {
    type: HAPPY_ACTION,
    payload
  };
}
