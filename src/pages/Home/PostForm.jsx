import React, { createRef } from 'react';

class PostForm extends React.Component {
  textareaRef = createRef();

  handleChangePostForm = (event) => {
    this.newPostValue = event.target.value;
  };
  onSubmitPostForm = (e) => {
    e.preventDefault();
    this.props.handlePostAdded(this.newPostValue);
  };

  componentDidUpdate() {
    this.textareaRef.current.value = '';
  }

  render() {
    console.log('PostForm rendered');
    return (
      <>
        <form className="write-form" onSubmit={this.onSubmitPostForm}>
          <textarea
            ref={this.textareaRef}
            className="form-control input-lg"
            placeholder="무슨 생각을 하고 계신가요?"
            spellCheck="false"
            onChange={this.handleChangePostForm}
          ></textarea>

          <button type="submit" className="btn btn-primary">
            공유하기
          </button>
        </form>
        <style jsx>
          {`
            .write-form {
              margin-bottom: 100px;
            }
            .write-form > textarea.form-control {
              min-height: 100px;
              line-height: 20px;
              padding: 20px;
              font-size: 18px;
              resize: none;
              border: none;
              border-radius: 0.5rem;
              transition: box-shadow ease-in-out 1s;
            }
            .write-form > textarea:focus {
              box-shadow: #999999 0 0 50px;
            }
            .write-form > button.btn {
              float: right;
              margin-bottom: 0;
              margin-top: 16px;
              background-color: #3b5999;
              color: #fffffe;
              border: none;
              font-weight: 800;
            }
          `}
        </style>
      </>
    );
  }
}

export default PostForm;
