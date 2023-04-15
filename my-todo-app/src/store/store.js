import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (index) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
}));
