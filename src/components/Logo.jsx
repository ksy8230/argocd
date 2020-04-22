import React from 'react';

const Logo = () => {
  return (
    <>
      <a href="/" className="navbar-brand">
        <i className="fab fa-facebook-square" aria-hidden="true"></i>
      </a>
      <style jsx>{`
        .navbar-brand i.fa-facebook-square {
          font-size: 27px;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Logo;
