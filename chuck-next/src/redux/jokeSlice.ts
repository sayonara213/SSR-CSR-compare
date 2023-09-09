import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IJoke } from "../types/joke";

interface JokeState {
  joke: IJoke;
  isLoading: boolean;
  error: string;
}

const initialState: JokeState = {
  joke: {
    categories: [],
    created_at: "",
    icon_url: "",
    id: "",
    updated_at: "",
    url: "",
    value: "",
  },
  isLoading: false,
  error: "",
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    setRequestJoke: (state) => {
      state.isLoading = true;
    },
    setSuccessJoke: (state, action: PayloadAction<IJoke>) => {
      state.joke = action.payload;
      state.isLoading = false;
    },
    setFailedJoke: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default jokeSlice.reducer;

export const { setRequestJoke, setSuccessJoke, setFailedJoke } =
  jokeSlice.actions;
