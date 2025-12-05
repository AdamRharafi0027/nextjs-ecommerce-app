const { createSlice } = require("@reduxjs/toolkit");

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      const exist = state.favorites.find((fav) => fav.id === action.payload.id);
      exist
        ? alert("this products is already in favorites list ")
        : (state.favorites = [...state.favorites, action.payload]);
    },
    removeFavorites: (state, action) => {
      state.fav.filter((fav) => fav.id !== action.payload);
    },
  },
});


export const {addFavorites, removeFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer