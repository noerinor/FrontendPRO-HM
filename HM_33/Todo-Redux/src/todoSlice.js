import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    loadRequest: (state) => {
      state.loading = true;
    },
    loadSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    loadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodo: (state, action) => {
      state.items.push({ text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.items[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      if (state.items[index]) {
        state.items[index].text = newText;
      }
    },
    clearTodos: (state) => {
      state.items = [];
    },
  },
});

export const {
  loadRequest,
  loadSuccess,
  loadFailure,
  addTodo,
  removeTodo,
  toggleComplete,
  editTodo,
  clearTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
