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
  