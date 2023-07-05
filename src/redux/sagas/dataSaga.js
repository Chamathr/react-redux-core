import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";

import {
  getDataActions,
} from "../types/dataType";
import {
  setData,
  setDataError,
  setDataLoading
} from "../actions/dataAction";
import {
  getDataApi,
} from "../services/dataService";

function* getData() {
  yield takeEvery(getDataActions.GET_DATA, function* () {
    try {
      yield put(setDataLoading('loading'));
      const data = yield call(getDataApi);
      yield put(setDataLoading('idle'));
      yield put(setData(data.data));
    } catch (error) {
      yield put(setDataLoading('idle'));
      yield put(setDataError(error.message));
    }
  });
}

export default function* rootSaga() {
  yield takeEvery(getDataActions.GET_DATA, getData);
}
