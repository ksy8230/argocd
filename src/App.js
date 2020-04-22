import React, { Component, createRef } from 'react';
import DefaultLayout from './layouts/DefaultLayout.jsx';
import PostForm from './pages/Home/PostForm.jsx';
import Post from './pages/Home/Post.jsx';
import { TreeNodeRoot, TreeNode } from './components/TreeNode.jsx';

function getOffsetElement(ref, targetRef) {
  //const sourceGetBoundingClientRect;
  const xOffset = ref.current.childNodes[0].getBoundingClientRect().x;
  const yOffset = ref.current.childNodes[0].getBoundingClientRect().y;
  const rightOffset = ref.current.childNodes[0].getBoundingClientRect().right;
  const topOffset = ref.current.childNodes[0].getBoundingClientRect().top;
  const sourceElemWidth = rightOffset - xOffset;
  const sourceElemHeight = ref.current.childNodes[0].getBoundingClientRect().height;

  const targetXOffset = targetRef.current.childNodes[0].getBoundingClientRect().x;
  const targetYOffset = targetRef.current.childNodes[0].getBoundingClientRect().y;
  const targetRightOffset = targetRef.current.childNodes[0].getBoundingClientRect().bottom;
  const targetTopOffset = targetRef.current.childNodes[0].getBoundingClientRect().top;
  const targetElemHeight = targetRightOffset - targetTopOffset;

  console.log(targetRef.current.childNodes[0].getBoundingClientRect());

  const sourceX = sourceElemWidth / 2 + xOffset;
  const sourceY = yOffset + sourceElemHeight / 2;
  console.log('root', sourceX, sourceY);

  const targetX = targetXOffset;
  const targetY = targetElemHeight / 2 + targetYOffset;

  const lineWidth = Math.floor(
    Math.sqrt(Math.pow(Math.abs(targetX - sourceX), 2) + Math.pow(Math.abs(targetY - sourceY), 2))
  );
  const root = document.getElementById('root');
  const arrow = document.createElement('div');
  arrow.style.width = lineWidth + 'px';
  arrow.style.height = '1px';
  arrow.style.background = '#555';
  arrow.style.position = 'absolute';
  arrow.style.top = topOffset + sourceElemHeight / 2 + 'px';
  arrow.style.left = sourceElemWidth / 2 + xOffset + 'px';
  arrow.style.transform = `rotate(${(Math.atan2(targetY - sourceY, targetX - sourceX) * 180) / Math.PI}deg)`;
  arrow.style.transformOrigin = '0%';
  root.appendChild(arrow);
}

export default class App extends Component {
  state = {
    user: {
      name: 'ksy',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    posts: [],
  };
  myRef = createRef();
  myRef2 = createRef();
  myRef3 = createRef();
  myRef4 = createRef();
  myRef5 = createRef();

  handlePostAdded = (content) => {
    this.setState({
      posts: [
        {
          id: this.state.posts.length,
          content,
          liked: '0',
          comments: [],
          user: {
            name: 'sy',
          },
          date: new Date(),
        },
        ...this.state.posts,
      ],
    });
  };

  componentDidMount() {
    const getData = localStorage.getItem('items');
    this.setState({
      posts: getData ? JSON.parse(getData) : this.state.posts,
    });
    getOffsetElement(this.myRef, this.myRef2);
    getOffsetElement(this.myRef, this.myRef3);
    getOffsetElement(this.myRef, this.myRef4);
    getOffsetElement(this.myRef, this.myRef5);
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.posts));
  }

  render() {
    console.log(this.state.posts);
    return (
      <>
        <DefaultLayout>
          <div className="application-details__tree">
            <div ref={this.myRef}>
              <TreeNodeRoot top="100px" left="20px" />
            </div>
            <div className="row"></div>

            <div ref={this.myRef3}>
              <TreeNodeRoot top="0px" left="300px" />
            </div>

            <div ref={this.myRef4}>
              <TreeNodeRoot top="100px" left="300px" />
            </div>

            <div ref={this.myRef2}>
              <TreeNodeRoot top="200px" left="300px" />
            </div>

            <div ref={this.myRef5}>
              <TreeNodeRoot top="300px" left="300px" />
            </div>
            <div className="application-details__row">
              <div>
                <TreeNode top="0px" left="300px" />
              </div>
              <div>
                <TreeNode top="0px" left="300px" />
              </div>
              <div>
                <TreeNode top="0px" left="300px" />
              </div>
            </div>
          </div>
        </DefaultLayout>
        <style jsx global>{`
          .application-details__tree {
            position: relative;
            padding: 1em;
            overflow-x: auto;
            overflow-y: auto;
            min-height: calc(100vh - 2 * 50px - 115px);
          }
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
              '돋움', Dotum, sans-serif;
            color: #202b3d;
            background-color: #e9eaed;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
          }
          body {
            padding: 100px 0;
          }
          .container {
            max-width: 600px;
          }
        `}</style>
      </>
    );
  }
}
