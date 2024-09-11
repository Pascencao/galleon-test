import { createSlice } from '@reduxjs/toolkit';

interface FavoriteState {
  favorites: { [key: string]: string[] }; // breed: images
}

const initialState: FavoriteState = {
  favorites: {},
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const { breed, image } = action.payload;
      if (!state.favorites[breed]) {
        state.favorites[breed] = [];
      }
      const index = state.favorites[breed].indexOf(image);
      if (index > -1) {
        state.favorites[breed].splice(index, 1);
      } else {
        state.favorites[breed].push(image);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
