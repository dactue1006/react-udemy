import { SELECTED_SONG } from '../actions';
import { combineReducers } from 'redux';

const listSongReducer = () => {
  return [
    {
      name: 'thi thoi',
      duration: '4:50'
    },
    {
      name: 'nhung ke mong mo',
      duration: '6:00'
    },
    {
      name: 'bad day',
      duration: '3:00'
    }
  ]
}

const selectedSongReducer = (selectedSong = null, action)=> {
  switch (action.type) {
    case SELECTED_SONG: 
      return action.payload;
    default: 
      return selectedSong
  }
}

export default combineReducers({
  listSong: listSongReducer,
  selectedSong: selectedSongReducer
})


