import { create } from 'zustand';
import { htmlJson } from '../utils/html-content';

export const useDom = create((set) => ({
  dom:{...htmlJson} ,
  setDom: (domElement) => set((state)=>({dom:domElement}))

})
)