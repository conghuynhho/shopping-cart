import { UPDATE_FILTER } from "./actionTypes";

const updateFilter = (filterSize) => {
  return {
    type: UPDATE_FILTER,
    payload: filterSize,
  };
};

export default updateFilter;
