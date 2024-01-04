import { create } from 'zustand';

const defaultConfig ={
    name:'',
    value:''
  }
export const useEditor = create((set) => ({
  type:{...defaultConfig} ,
  config:{
    xPath:'',
    selectedText:''
  },
  changeType: ({name,value}) => set((state)=>({type:{...state.type,name:name,value:value}})),
  changeConfig: ({xPath,selectedText}) => set((state)=>({config:{...state.config,xPath:xPath,selectedText:selectedText}}))
})
)