export const reUpdateCard = (state = false, action) => {
  switch (action.type) {
    case "UPDATE_CARD":
      return !state;
    default:
      return state;
  }
};

export const acUpdateCard = () => {
  return {
    type: "UPDATE_CARD",
  };
};
