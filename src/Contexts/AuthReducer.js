/**
 * Auth Reducer
 *
 * @param state {{currentUser: null}}
 * @param action {{type: string, payload: any}}
 * @returns {{currentUser: null}|*|{currentUser}}
 * @constructor
 */
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
