import { combineReducers } from "redux";
import family from "./familyReducer";
import user from "./userReducer";
import loginMode from "./loginModeReducer";
import lists from "./listReducer";
import selectedUser from "./selectedUserReducer";
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  family,
  user,
  loginMode,
  selectedUser,
  lists,
});

export default rootReducer;
