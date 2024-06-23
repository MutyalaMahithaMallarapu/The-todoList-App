import { create } from 'zustand';

const useToDoListStore = create((set) => ({

  data: [],

  setData: (newData) => set((state) => ({
    data: [...state.data, newData],
  })),

  deleteTodo: (todoId) =>
    set((state) => ({
      data: state.data.filter((data) => data.id !== todoId),
    })),

}));

export default useToDoListStore;