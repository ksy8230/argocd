import React from 'react';
import moment from 'moment';
moment.locale('ko'); // language transfer not working...

const Post = ({ post }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.user.name}</h5>
          <h6 className="card-subtitle text-muted">
            {moment(moment(post.date).format('YYYY-MM-DD HH:mm:ss')).fromNow()}
          </h6>
          <p className="card-text">{post.content}</p>
          <hr />
          <div className="card-info">
            <button type="button" className="thumb-count">
              <i className="far fa-thumbs-up">{post.liked}</i>
            </button>
            <span className="comment-count">
              <i className="far fa-comment-alt">{post.comments.length}</i>
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          padding: 0;
          margin-top: 50px;
          border: none;
          border-radius: 0.5rem;
        }
        .card .card-body {
          padding: 40px;
        }
        .card .card-text {
          padding-top: 20px;
          white-space: pre-wrap;
        }
        .card .card-info {
          height: 20px;
        }
        .card .card-info .thumb-count,
        .card .card-info .comment-count {
          display: inline-block;
          margin-right: 24px;
          vertical-align: middle;
          font-size: 12px;
          cursor: pointer;
          padding: 0;
          border: none;
          background-color: transparent;
          transition: color ease-in-out 0.3s;
          transition: margin-top ease-in-out 0.2s;
        }
        .card .card-info .thumb-count:hover,
        .card .card-info .comment-count:hover {
          color: #007bff;
          margin-top: -3px;
        }
        .card .card-info .thumb-count .on {
          color: #007bff;
        }
      `}</style>
    </>
  );
};

export default Post;
