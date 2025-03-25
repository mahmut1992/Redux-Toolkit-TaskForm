/* 

* Slice ile hem action ları hem actionTypes ları hemde reducer ları tek bir yerde oluşturacağız

* Slice oluşturmak için createSlice import edilir
* createSlice içerisinde bir obje içinde name, initialState ve reducers oluşturulur.

* name :
* initialState :
* reducers : aksiyonların görevlerinin tanımlandığı yer
*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: false, name: "Fırat" },
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Aksiyonlar
export const { increase, decrease, reset, setCount } = counterSlice.actions;

// Reducer

export default counterSlice.reducer;
