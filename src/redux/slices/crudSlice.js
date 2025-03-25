import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialTask } from "../../Constants/constants";

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTask },
  reducers: {
    addTask: (state, action) => {
      // Gelen action içerisindeki payload a bir id ekle
      action.payload.id = v4();
      // task dizisine gelen action içerisindeki payload içindeki verileri ekle
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const filtred = state.tasks.filter((task) => task.id != action.payload);
      state.tasks = filtred;
    },
    updateTask: (state, action) => {
      // güncellenecek elemanın sırasını bul

      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      // sırası bulunan elemanı dizi içerisinde güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

// Aksiyonlar
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

// Reducer

export default taskSlice.reducer;
