import { create } from 'zustand';

export const useFavListStore = create((set) => {
    return {
        idsFavList: [],
        loadFavList: () => {
            set({ idsFavList: [1, 2, 3, 4, 5, 6] })
        }
    }
})