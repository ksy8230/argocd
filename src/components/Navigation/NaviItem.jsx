import React from 'react';

const NaviItem = ({ link, menuName, children }) => {
  return (
    <>
      <li className="nav-item">
        <a href={link} className="nav-link">
          {menuName}
          {children}
        </a>
      </li>
      <style jsx>{`
        .nav-item .nav-link {
          color: white;
          font-weight: 800;
          font-size: 12px;
          cursor: pointer;
          line-height: 26px;
        }
        .nav-item .nav-link:hover {
          color: rgba(255, 255, 255, 0.75);
        }
        :global(.nav-link > img) {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 5px;
        }
      `}</style>
    </>
  );
};

export default NaviItem;
