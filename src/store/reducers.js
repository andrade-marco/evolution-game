//Reducers
//Internal dependencies
import {
  SAVE_PERSONAL_DATA,
  SAVE_BUSINESS_DATA,
  SAVE_ERROR,
  CLEAR_ERROR
} from "./types";

//Default state - defining a default state is useful to give other developers
// an idea of what type of data is expected in each field
const DEFAULT_STATE = {
  personalData: {
    firstName: "",
    lastName: "",
    profession: "",
    gender: "",
    age: "",
    income: 0,
  },
  businessData: {
    companyName: "",
    industry: 0,
    location: "",
    employeeCount: 0,
    revenue: 0
  },
  error: ""
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    //Personal and business data are the pieces of the global state that will
    // hold the information entered by the user and after the save button is
    // clicked on; They simulate saving the data to a database
    case SAVE_PERSONAL_DATA:
      return { ...state, personalData: action.payload };
    case SAVE_BUSINESS_DATA:
      return { ...state, businessData: action.payload };

    //In this simple app, there are no anticipated errors that could happen
    // but in a "real" application a reducer with different types of errors
    // should be created to handle error from API request, etc
    case SAVE_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
}
