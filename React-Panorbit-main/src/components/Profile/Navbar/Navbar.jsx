import React from 'react';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <span className="m-0 title" style={{ alignSelf: 'center' }}>
          Profile
        </span>
        <div className="d-flex">
          <Avatar
            alt="Remy Sharp"
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg"
            sx={{ width: 30, height: 30 }}
          />
          <span className="m-0 ms-3" style={{ alignSelf: 'center' }}>
            Aayush Jain
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
