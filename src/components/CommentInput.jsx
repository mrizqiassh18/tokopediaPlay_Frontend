import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ videoId, onCommentAdded }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim data komentar ke server melalui API POST
    axios.post(`http://localhost:5000/videos/${videoId}/comments`, {
      username: username,
      comment: comment
    })
    .then(response => {
      // Panggil fungsi callback untuk memperbarui komentar
      onCommentAdded(response.data);
    })
    .catch(error => console.error('Error submitting comment:', error));

    // Reset input fields
    setUsername('');
    setComment('');
  };

  return (
    <div className="comment-input">
      <h2>Tambah Komentar</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Username</p>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Masukan username anda...'
          />
        </div>
        <div>
          <p>Komentar</p>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Masukan komentar anda...'
            cols="60" rows="10"
          />
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};

export default CommentForm;