import React from 'react';
import ListSong from './ListSong';
import SongDetail from './SongDetail';

const App = ()  => {
  return (
    <div className='ui container grid'>
      <div className='row'>
        <div className='eight wide column'>
          <ListSong/>
        </div>
        <div className='eight wide column'>
          <SongDetail />
        </div>
      </div>
    </div>
  )
}
export default App;