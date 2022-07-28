import create from 'zustand';

interface BearState {
  bears: number;
  addBear: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const getBears = () => useBearStore.getState().bears;
