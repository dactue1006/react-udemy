import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const ListSong = (props) => {
  const { listSong, selectSong } = props;
  const renderedList = listSong.map((song, index)=>
    <div className='item' key={index}>
      <div className='right floated content'>
        <button 
          className='ui button primary'
          onClick={ () => selectSong(song)}>Select</button>
      </div>
      <div className='content'>{song.name}</div>
    </div>
  )
  return (
    <div className='ui divided list'>{renderedList}</div>
  )
}

const conntectIndex =  connect(
  state => ({
    listSong: state.listSong
  }),
  { selectSong }
)(ListSong);

export default conntectIndex;