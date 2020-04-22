import React from 'react';

const CommentForm = () => {
  return (
    <>
      <form className="comment-form">
        <textarea className="form-control input-lg" placeholder="댓글을 입력하세요..." spellCheck="false"></textarea>
        <button type="submit" className="btn btn-primary">
          댓글달기
        </button>
      </form>
      <style jsx>{`
        .comment-form {
          margin: 20px;
        }
        .comment-form > textarea.form-control {
          min-height: 20px;
          line-height: 20px;
          border-radius: 0.5rem;
          resize: none;
        }
        .comment-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border-color: unset;
          font-weight: 800;
        }
      `}</style>
    </>
  );
};

export default CommentForm;
