/**
 * Search Reducer
 *
 * @param searchState {{currentSearch: null}}
 * @param action {{type: string, payload: any}}
 * @returns {*|{currentSearch: null}|{currentSearch}}
 * @constructor
 */
const SearchReducer = (searchState, action) => {
  switch (action.type) {
    case "SEARCHSTARTED": {
      return {
        currentSearch: action.payload,
      };
    }
    case "SEARCHENDED": {
      return {
        currentSearch: null,
      };
    }
    default:
      return searchState;
  }
};

export default SearchReducer;
