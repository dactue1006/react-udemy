export const SELECTED_SONG = 'SELECTED_SONG';

export const selectSong = (song) => {
  return {
    type: SELECTED_SONG,
    payload: song
  }
}