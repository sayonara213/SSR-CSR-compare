import { GetJoke } from "../helpers/api";
import { setFailedJoke, setRequestJoke, setSuccessJoke } from "./jokeSlice";
import { AppDispatch } from "./store";

export const fetchJoke = async (dispatch: AppDispatch, value: string) => {
  try {
    dispatch(setRequestJoke());
    const joke = await GetJoke(value);
    dispatch(setSuccessJoke(joke));
  } catch (error) {
    dispatch(setFailedJoke(error as string));
  }
};
