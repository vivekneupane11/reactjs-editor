import { create } from 'zustand';

const defaultType ={
    name:'',
    value:''
  }
export const useEditor = create((set) => ({
  type:{...defaultType} ,
  config:{
    startPath:[],
    startOffset:0,
    endPath:[],
    endOffset:0,
    selectedText:''
  },
  changeType: ({name,value}) => set((state)=>({type:{...state.type,name:name,value:value}})),
  changeConfig: (updates) => set((state)=>({config:{...state.config,...updates}}))
})
)