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
    }
    