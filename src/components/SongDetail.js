import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please select the song</div>
  }

  return (
    <div>
      <h4>Detail for: </h4>
      <p>
        {song.name}
        <br/>
        {song.duration}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    song: state.selectedSong
  })
}

export default connect(mapStateToProps)(SongDetail);