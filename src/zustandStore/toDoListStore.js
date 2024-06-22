import {create} from 'zustand';

const useToDoListStore = create((set) => ({
    
  formData: {
      title: '',
      summary: ''
    },
  
    setFormData: (newData) => set((state) => ({
      formData: { ...state.formData, ...newData },
    })),

    isToDoListBtnClicked: false,
    setIsToDoListBtnClicked: (status) => {
      set({isToDoListBtnClicked: status})
    }
  }));

  export default useToDoListStore;