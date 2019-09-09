import { HAPPY_ACTION } from "../actions/app";

export default function happyReducer(state = {}, action) {
  switch (action.type) {
    case HAPPY_ACTION:
      return {
        happyState: "happy!"
      };
    default:
      return state;
  }
}
