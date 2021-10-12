import create from 'zustand';

export const useStore = create(set => ({
  user: [],
  addUsers: () => set(state => ({user: state.user})),
}));
