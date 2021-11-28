import actions from "./action-types";

export function showOrHide(value) {
  return {
    type: actions.CREATE_TO_DO,
    payload: value
  };
}