import { all } from "redux-saga/effects";
import register from "./registrationSaga";
import family from "./familySaga";
import login from "./loginSaga";
import user from "./userSaga";
export default function* rootSaga() {
  yield all([family(), register(), login(), user()]);
}
