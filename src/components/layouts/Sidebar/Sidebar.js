import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import {
  HomeRounded,
  Photo,
  PhotoAlbumRounded,
  AccountCircleRounded,
  MailRounded,
} from '@material-ui/icons';
const Sidebar = ({ children }) => {
  const location = useLocation();
  return (
    <div className="root">
      <nav className="navbar">
        <div className="brand">
          <h1 className="resp">D</h1>
          <h1>Dashboard</h1>
        </div>
        <ul className="navbar-nav">
          <li>
            <Link
              to={process.env.PUBLIC_URL + '/'}
              className={location.pathname === process.env.PUBLIC_URL + '/' ? 'active' : ''}
            >
              <div className="icon">
                <HomeRounded />
              </div>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to={process.env.PUBLIC_URL + '/albums'}
              className={location.pathname === process.env.PUBLIC_URL + '/albums' ? 'active' : ''}
            >
              <div className="icon">
                <PhotoAlbumRounded />
              </div>
              <span>Albums</span>
            </Link>
          </li>
          <li>
            <Link
              to={process.env.PUBLIC_URL + '/gallery'}
              className={location.pathname === process.env.PUBLIC_URL + '/gallery' ? 'active' : ''}
            >
              <div className="icon">
                <Photo />
              </div>
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link
              to={process.env.PUBLIC_URL + '/mail'}
              className={location.pathname === process.env.PUBLIC_URL + '/mail' ? 'active' : ''}
            >
              <div className="icon">
                <MailRounded />
              </div>
              <span>Mail</span>
            </Link>
          </li>
          <li>
            <Link
              to={process.env.PUBLIC_URL + '/admin'}
              className={location.pathname === process.env.PUBLIC_URL + '/admin' ? 'active' : ''}
            >
              <div className="icon">
                <AccountCircleRounded />
              </div>
              <span>Admin</span>
            </Link>
          </li>
        </ul>
        <div className="navbar-footer">
          <div className="footer">
            <div className="row">
              <Link to={process.env.PUBLIC_URL + '/setting'}>Setting</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="main">{children}</div>
    </div>
  );
};

export default Sidebar;
