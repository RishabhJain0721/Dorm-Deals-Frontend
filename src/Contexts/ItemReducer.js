/**
 * Item Reducer
 *
 * @param itemState {{currentItem: null}}
 * @param action {{type: string, payload: any}}
 * @returns {*|{currentItem: null}|{currentItem}}
 * @constructor
 */
const ItemReducer = (itemState, action) => {
  switch (action.type) {
    case "DETAILSOPENED": {
      return {
        currentItem: action.payload,
      };
    }
    case "DETAILSCLOSED": {
      return {
        currentItem: null,
      };
    }
    default:
      return itemState;
  }
};

export default ItemReducer;
