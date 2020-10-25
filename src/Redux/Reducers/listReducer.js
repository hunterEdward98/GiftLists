//set athlete list to action payload
const listReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_LISTS":
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default listReducer;
