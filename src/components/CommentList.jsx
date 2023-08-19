import React from 'react'

export const CommentList = ({comments}) => {
  return (
    <div className="comment-list">
        <h2>Komentar</h2>
        {comments.map(comment => (
            <div className="comment-item" key={comment._id}>
                <p className="username">{comment.username}</p>
                <p className='createdAt'>{comment.created_at}</p>
                <p className="comments-detail">{comment.comment}</p>
            </div>
        ))}
    </div>
  )
}

export default CommentList;