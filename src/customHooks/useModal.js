import { create } from 'zustand';

const useModal = create((set) => ({
  open: false,
  toggleModal: () => set((state) => ({open:!state.open})),
}))


export default useModal;