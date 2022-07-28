const localCard = JSON.parse(localStorage.getItem("reLocalCard") || "[]");

export const reLocalCard = (state = localCard, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return [...state, action.payload];
    case "REMOVE_FROM_CARD":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CARD":
      return [];
    default:
      return state;
  }
};

export const acAddToLocalCard = (product) => ({
  type: "ADD_TO_CARD",
  payload: product,
});
