import React from 'react';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';

const Details = () => {
  // const { currentUser } = useSelector((state) => state);
  const currentUser = {}
  return (
    <>
      <div className="d-flex flex-column">
        <div className="align-items-center justify-content-center d-flex flex-column">
          {/* <img
            src={currentUser?.profilepicture}
            className="rounded-circle mb-2"
            alt="person name"
            width={180}
            height={180}
          /> */}
          <span className='title-text my-3'>{currentUser?.name}</span>
        </div>
        <div className="d-flex">
          <p className="col-4 text-end title">Username : </p>
          <p className="col-8 title-text ps-2"> {currentUser?.username}</p>
        </div>
        <div className="d-flex">
          <p className="col-4 text-end title">e-mail : </p>
          <p className="col-8 title-text ps-2"> {currentUser?.email}</p>
        </div>
        <div className="d-flex">
          <p className="col-4 text-end title">Phone : </p>
          <p className="col-8 title-text ps-2"> {currentUser?.phone}</p>
        </div>
        <div className="d-flex">
          <p className="col-4 text-end title">Website : </p>
          <p className="col-8 title-text ps-2"> {currentUser?.website}</p>
        </div>
        <Divider />
      </div>
      <div className="d-flex flex-column">
        <span className="text-center text-end title my-3">Company</span>
        <div className="d-flex">
          <p className="col-4 text-end title">Name : </p>
          <p className="col-8 title-text ps-2"> {currentUser?.company?.name}</p>
        </div>
        <div className="d-flex">
          <p className="col-4 text-end title">catchphrase : </p>
          <p className="col-8 title-text ps-2"> {currentUser?.company?.catchPhrase}</p>
        </div>
        <div className="d-flex">
          <p className="col-4 text-end title">bs : </p>
          <p className="col-8 title-text ps-2"> {currentUser?.company?.bs}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
