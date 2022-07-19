const user = JSON.parse(localStorage.getItem("user") || "{}");

export const reUser = (state = user, action) => {
  switch (action.type) {
    case "USER_DATA":
      return action.payload;
    default:
      return state;
  }
};

export const acUser = (user) => ({
  type: "USER_DATA",
  payload: user,
});
