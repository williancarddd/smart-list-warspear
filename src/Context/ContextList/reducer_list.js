import { types } from "./types_reducer"
export function reducer_list(state, action) {
  switch(action.type){
    case types.ADD_MEMBER:
      return [...state, action.payload]
    default:
      return state
  }
}