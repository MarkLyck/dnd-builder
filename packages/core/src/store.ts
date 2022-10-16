import create from "zustand";

const useDnDStore = create((set) => ({
  regenKey: new Date(),
  updateRegenKey: () => set(() => ({ regenKey: new Date() })),
}));

export default useDnDStore;
