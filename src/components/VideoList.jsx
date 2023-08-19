import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/videos')
            .then(response => setVideos(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <div className='video-list'>
        {videos.map(video => (
                <div className='video-item' key={video._id}>
                    <Link to={`/video/${video._id}`}>
                        <img src={video.url} alt="video" />
                        <p>{video.title}</p>
                    </Link>
                </div>
            ))}
    </div>
  )
}

export default VideoList;