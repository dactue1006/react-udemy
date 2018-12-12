import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{
  state = {
    videos: [],
    selectedVideo: null
  }
  onSearchSubmit = async (term)=>{
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    const { items } = response.data; 
    this.setState({ 
      videos: items,
      selectedVideo: items[0]
     });

  }

  onSelectedVideo = (video) => {
    console.log('from the App', video);
    this.setState({ selectedVideo: video });
  }

  componentDidMount() {
    this.onSearchSubmit('thi thoi');
  }

  render() {
    return (
      <div className='ui container'> 
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default App;