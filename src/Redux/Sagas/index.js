import { all } from "redux-saga/effects";
import family from "./familySaga";

export default function* rootSaga() {
  yield all([family()]);
}
