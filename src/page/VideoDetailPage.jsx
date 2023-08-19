import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../components/ProductList';
import CommentList from '../components/CommentList';
import VideoItem from '../components/VideoItem';
import CommentInput from '../components/CommentInput';

const VideoDetailPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [productList, setProductList] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/videos/${id}`)
      .then(response => {
        setVideo(response.data.video);
        setProductList(response.data.productList);
        setComments(response.data.comment);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const handleCommentAdded = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="container">
      
      <div className="navbar">
            <h1 className="logo">Tokopedia Play</h1>
      </div>

      <div className="back-title">
        <div className="back-button">
          <a href="/">X</a>
        </div>
        <div className="title">
          <h2>{video.title}</h2>
        </div>
      </div>

      <main>
        <ProductList products={productList} />

        <VideoItem video={video.youtubeId} />

        <div className="comment-section">
          <CommentList comments={comments} />
          <CommentInput videoId={id} onCommentAdded={handleCommentAdded} />
        </div>
      </main>
    </div>
  );
};

export default VideoDetailPage;
