import { createSlice } from "@reduxjs/toolkit";
import data from '../../assets/data.json'

export const artistSlice = createSlice({
  name: "artists",
  initialState: {
    list: [data.data],
    nombre: "",
    loading: false,
    error: null,
  },
  reducers: {
    setName: (state, action) => {
      state.nombre = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    upVoteByArtist: (state, action) => {
      // receive name of artist
      const result = state.list.map((artist) => artist.name === action.payload.name ? { ...artist, votes: { positive: artist.votes.positive + 1, negative: artist.votes.negative } } : artist);
      state.list = result;
    },
    downVoteByArtist: (state, action) => {
      // receive name of artist
      const result = state.list.map((artist) => artist.name === action.payload.name ? { ...artist, votes: { positive: artist.votes.positive - 1, negative: artist.votes.negative } } : artist);
      state.list = result;
    }
  },
});

export const { setName, setList, upVoteByArtist, downVoteByArtist } = artistSlice.actions;
export default artistSlice.reducer;
