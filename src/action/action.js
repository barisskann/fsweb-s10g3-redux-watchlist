export const FAV_MOVİE = "FAV_MOVİE";
export const FAV_REMOVE = "FAV_REMOVE";

export function addMovie(payload) {
  return {
    type: FAV_MOVİE,
    payload,
  };
}
export function removeMovie(payload) {
  return {
    type: FAV_REMOVE,
    payload,
  };
}
