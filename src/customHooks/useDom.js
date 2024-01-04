import { create } from 'zustand';

export const useDom = create((set) => ({
  dom:null ,
  setDom: (domElement) => set((state)=>({dom:domElement}))

})
)