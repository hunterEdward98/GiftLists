import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
function* fetchFamily(action) {
  try {
    const response = yield axios.get("/api/user/notme");
    console.log("FETCHED DATA: ", response);
    yield put({ type: "SET_ATHLETES", payload: response.data });
  } catch (error) {
    console.log("Error with athletes:", error);
  }
}
function* FamilySaga() {
  yield takeLatest("FETCH_FAMILY", fetchFamily);
}

export default FamilySaga;
