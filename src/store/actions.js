//Actions
//Internal dependencies
import {
  SAVE_PERSONAL_DATA,
  SAVE_BUSINESS_DATA,
} from "./types";


//Saving personal data
export const saveFormData = (type, data, callback) => {
  //Simulate an async API call; if there was an actual API call this action
  // creator would need to be different (e.g. Redux Thunk middleware)
  setTimeout(callback, 1200);

  //Depending on the type of data, save the information in the appropriate
  // piece of global state: personal or business
  if (type === "personal") {
    return { type: SAVE_PERSONAL_DATA, payload: data };
  }

  return { type: SAVE_BUSINESS_DATA, payload: data };
}
