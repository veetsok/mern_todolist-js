import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
