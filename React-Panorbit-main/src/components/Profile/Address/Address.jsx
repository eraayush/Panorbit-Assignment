import React from 'react';
import { useSelector } from 'react-redux';

const Address = () => {
    // const { currentUser } = useSelector((state) => state);
    const currentUser = {}
    return (
        <>
            <div className=' d-flex flex-column p-3'>
                <div className='title pb-3'>Address:</div>
                <div className='d-flex flex-column mt-3'>
                    <div className='d-flex'>
                        <p className='col-3 text-end title'>Street : </p>
                        <p className='title-text ps-2'> {currentUser?.address?.street}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='col-3 text-end title'>Suite : </p>
                        <p className='title-text ps-2'> {currentUser?.address?.suite}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='col-3 text-end title'>City : </p>
                        <p className='title-text ps-2'> {currentUser?.address?.city}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='col-3 text-end title'>Zipcode : </p>
                        <p className='title-text ps-2'> {currentUser?.address?.zipcode}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='col-3 text-end title'>Lat : </p>
                        <p className='title-text ps-2'> {currentUser?.address?.geo?.lat}</p>
                        <p className='col-3 text-end title'>Long : </p>
                        <p className='title-text ps-2'> {currentUser?.address?.geo?.lng}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;
