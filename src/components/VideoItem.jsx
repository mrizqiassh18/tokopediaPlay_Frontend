import React from 'react'

export const VideoItem = ({video}) => {
  return (
    <div className="video-item_">
        <iframe src={`https://www.youtube.com/embed/${video}`} width="100%" height="100%" title='Video Youtube'></iframe>
    </div>
  )
}

export default VideoItem;