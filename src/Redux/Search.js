export const acSearch = (arr) => {
  return {
    type: "SERCH_PRODUCT",
    payload: arr,
  };
};

export const reSearch = (state = "", action) => {
  switch (action.type) {
    case "SERCH_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};
