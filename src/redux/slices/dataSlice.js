import { createSlice } from "@reduxjs/toolkit";
import * as DataService from "../services/dataService";

const REDUCER_DOMAIN = "data";

export const dataSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: {
    loading: false,

    data: [],
    retrievingDataLoading: false,
    retrievingDataError: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setRetrievingDataLoading: (state, action) => {
      state.retrievingDataLoading = action.payload;
    },
    setRetrievingDataError: (state, action) => {
      state.retrievingDataError = action.payload;
    },
  },
});

export const { setData, setRetrievingDataLoading, setRetrievingDataError } = dataSlice.actions;

export const fetchData = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setRetrievingDataLoading(true));
      const response = await DataService.getDataApi(payload);
      if (response && response.status === 200) {
        dispatch(setRetrievingDataLoading(false));
        dispatch(setData(response?.data));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch(setRetrievingDataLoading(false));
      dispatch(setRetrievingDataError(error));
    };
  };
}

export default dataSlice.reducer;
