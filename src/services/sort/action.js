import { UPDATE_SORT } from "./actionTypes"

const updateSort = (value) => {
  return {
    type: UPDATE_SORT,
    payload: value
  }
}

export default updateSort;