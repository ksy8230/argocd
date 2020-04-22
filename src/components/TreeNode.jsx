import React from 'react';

const TreeNodeRoot = ({ top, left }) => {
  return (
    <>
      <div className="application-resource-tree__node" style={{ top, left }}>
        TreeNode TreeN
      </div>
      <style jsx>{`
        .application-resource-tree__node {
          position: absolute;
          transition: all 0.2s linear;
          padding: 2rem;
          margin: 10px;
          box-shadow: 1px 1px 1px #ccd6dd;
          background-color: white;
          border-radius: 4px;
          border: 1px solid transparent;
          cursor: pointer;
          z-index: 1;
        }
      `}</style>
    </>
  );
};

const TreeNode = ({ top, left }) => {
  return (
    <>
      <div className="application-resource-tree__node" style={{ top, left }}>
        TreeNode TreeN
      </div>
      <style jsx>{`
        .application-resource-tree__node {
          display: inline-block;
          width: 200px;
          transition: all 0.2s linear;
          padding: 2rem;
          margin: 10px;
          box-shadow: 1px 1px 1px #ccd6dd;
          background-color: white;
          border-radius: 4px;
          border: 1px solid transparent;
          cursor: pointer;
          display: flex;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-align-items: center;
          align-items: center;
          /* flex-direction: row; */
          /* flex-direction: column-reverse; */
          flex-direction: row-reverse;
          z-index: 1;
        }
      `}</style>
    </>
  );
};

export { TreeNodeRoot, TreeNode };
