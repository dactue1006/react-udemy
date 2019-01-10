import { types } from '../actions/users';

const intialState = {
  items: []
}

export default function userReducer(state = intialState, action) {
  switch(action.type) {
    case types.GET_USERS_SUCCESS: 
      return {
        ...state,
        items: action.payload.items
      }
    case types.USER_ERROR:
      console.log(action.payload.error);
      return {
        ...state,
        error: action.payload.error
      }
    default: 
      return state
  }
}
