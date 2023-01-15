import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import dataReducer from "./slices/dataSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  data: dataReducer
});

export { rootPersistConfig, rootReducer };
