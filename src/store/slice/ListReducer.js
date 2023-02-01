import { FAV_MOVİE, FAV_REMOVE } from "../../action/action";
const initialState = {
  favMovies: JSON.parse(localStorage.getItem("deger")) || [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAV_MOVİE:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case FAV_REMOVE:
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
