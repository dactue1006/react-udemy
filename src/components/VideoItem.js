import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div onClick={()=> onSelectedVideo(video)} className='video-item item'>
        <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.default.url} />
      <div className='content'>
        {video.snippet.title}
      </div>
    </div>
  )
}

export default VideoItem;