import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';



const todoSlice = createSlice({
   name: 'allTasks',
   initialState: {
      allTasks: []
   },
   reducers: {
      addNewTasks(state, action) {
         if (action.payload === '' || !action.payload.trim()) return;
         state.allTasks.push({
            id: nanoid(),
            text: action.payload.trim().toLowerCase(),
         })
      },
      clearAllTasks(state, action) {
         state.allTasks = [];
      },
      deleteElement(state, action) {
         state.allTasks = state.allTasks.filter(element => element.id !== action.payload)
      }
   },

})

export const { addNewTasks, clearAllTasks, deleteElement } = todoSlice.actions;
export default todoSlice.reducer;