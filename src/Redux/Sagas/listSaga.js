import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
function* fetchLists(action) {
  try {
    const response = yield axios.get(`/api/list/${action.payload.user_id}`);
    console.log("FETCHED DATA: ", response);
    yield put({ type: "SET_LISTS", payload: response.data });
  } catch (error) {
    console.log("Error with athletes:", error);
  }
}
function* FamilySaga() {
  yield takeLatest("FETCH_LISTS", fetchLists);
}

export default FamilySaga;
