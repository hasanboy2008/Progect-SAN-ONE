export const acUser=(user)=>{
    return {
      type: "USER",
      payload: user,
    };
}


const user = JSON.parse(  localStorage.getItem('user')|| {} )

export const reUser = (state = user, action) => {
  switch (action.type) {
    case "USER":
      return action.payload;
    default:
      return state;
  }
};