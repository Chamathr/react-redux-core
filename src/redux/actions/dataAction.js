import { getDataActions } from "../types/dataType";

export const getData = (payload) => {
  return {
    type: getDataActions.GET_DATA,
    payload,
  };
};

export const setData = (payload) => {
  return {
    type: getDataActions.SET_DATA,
    payload,
  };
};

export const setDataError = (payload) => {
  return {
    type: getDataActions.SET_DATA_ERROR,
    payload,
  };
};

export const setDataLoading = (payload) => {
  return {
    type: getDataActions.SET_DATA_LOADING,
    payload,
  };
};