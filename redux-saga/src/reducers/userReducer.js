import { types } from '../actions/users';

const intialState = {
  items: []
}

export default function userReducer(state = intialState, action) {
  switch(action.type) {
    case types.GET_USERS_SUCCESS: 
      return {
        items: action.payload.items
      }
    default: 
      return state
  }
}
