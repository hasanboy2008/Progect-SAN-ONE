export const acCart = (arr) => {
  return {
    type: "CART",
    payload: arr,
  };
};

export const reCart = (state = [], action) => {
  switch (action.type) {
    case "CART":
      return action.payload;
    default:
      return state;
  }
};

export const reReloadCard = (state = false, action) => {
  switch (action.type) {
    case "RELOAD_CARD":
      return !state;
    default:
      return state;
  }
};
