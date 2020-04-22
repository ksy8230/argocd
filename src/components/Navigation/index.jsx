import React, { memo } from 'react';
import NaviItem from './NaviItem.jsx';
import Logo from '../Logo.jsx';

const Navigation = memo(() => {
  return (
    <>
      <nav className="navbar fixed-top bg-blue">
        <Logo />
        <ul className="nav">
          <NaviItem link="/login.html" menuName="Login" />
          <NaviItem link="/login.html" menuName="Harry" />
          <NaviItem link="/signup.html" menuName="SignUp" />
          <NaviItem link="/u/1" menuName="">
            <img
              alt="user image"
              src="https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png"
            />
          </NaviItem>
          <NaviItem link="/" menuName="LogOut" />
        </ul>
      </nav>
      <style jsx>{`
        .navbar {
          padding: 0rem 1rem;
        }
        nav.fixed-top {
          height: 50px;
        }
        nav.navbar.bg-blue {
          background-color: #3b5999;
        }
      `}</style>
    </>
  );
});

export default Navigation;
