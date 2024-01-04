import { create } from 'zustand';

const useCommentModal = create((set) => ({
  openComment: false,
  toggleCommentModal: () => set((state) => ({openComment:!state.openComment})),
}))


export default useCommentModal;