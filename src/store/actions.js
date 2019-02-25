//Actions
//Internal dependencies
import {
  SAVE_PERSONAL_DATA,
  SAVE_BUSINESS_DATA,
  SAVE_ERROR,
  CLEAR_ERROR
} from "./types";


//Saving personal data
export const saveFormData = (type, data) => {
  try {
    if (type === "personal") {
      return { type: SAVE_PERSONAL_DATA, payload: data };
    }

    return { type: SAVE_BUSINESS_DATA, payload: data };

  } catch (err) {
    return {
      type: SAVE_ERROR,
      payload: "An error occurred. Please try again."
    };
  }
}

export const clearSaveError = () => {
  return { type: CLEAR_ERROR }
}
