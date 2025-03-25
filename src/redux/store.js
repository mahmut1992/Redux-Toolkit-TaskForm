import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import taskReducer from "./slices/crudSlice";
const store = configureStore({
  reducer: {
    counterReducer,
    taskReducer,
  },
});
export default store;
