import React, { useState } from 'react';
import './style.css';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';

import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { ArrowDropDownRounded, ArrowDropUpRounded } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const PageHeader = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { dataUserDetail } = useSelector((s) => s.dashboard);
  const history = useHistory();

  const openPopper = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
    setOpen(!open);
  };

  const closePopper = () => {
    setOpen(false);
  };

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('gallery-access-token');
    localStorage.removeItem('gallery-token-exp');
    localStorage.removeItem('gallery-user-data');
    history.replace('/login');
  };

  return (
    <div className="header-root">
      <div className="row space">
        <div className="page-title">{<h1>{title}</h1>}</div>
        <div className="user-profile" onClick={(e) => openPopper(e)}>
          <div className="row user-data">
            <Avatar src={dataUserDetail.img} />
            <h3>{dataUserDetail.name}</h3>
            {open ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />}
          </div>
        </div>
      </div>
      <Popper open={open} anchorEl={anchorEl} placement={'bottom'} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={closePopper}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper style={{ padding: '.5rem 1rem' }}>
                <p onClick={(e) => logOut(e)} style={{ cursor: 'pointer' }}>
                  Log Out
                </p>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

export default PageHeader;
