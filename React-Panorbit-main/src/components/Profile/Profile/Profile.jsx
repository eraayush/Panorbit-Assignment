import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Divider from '@mui/material/Divider';
import Details from '../Details/Details';
import Address from '../Address/Address';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import './Profile.css';
import CommingSoon from '../CommingSoon/CommingSoon';

function profile() {
    const [tabName, setTabName] = useState('Profile');
    const handleChange = (event, tab) => {
      setTabName(tab);
    };

    return (
        <>
            <div className='my-5 mx-5 py-3 px-5 d-flex align-items-center justify-content-center'>
                <div class='row w-100'>
                    <TabContext value={tabName}>
                        <div className='col-2 px-0'>
                            <div className='side_bar px-3 row align-items-center'>
                                <Box sx={{ width: '100%', color: 'white' }}>
                                    <Tabs onChange={handleChange} orientation='vertical'>
                                        <Tab sx={{ color: 'white' }} label='Profile' value='Profile' />
                                        <Divider variant='middle' />
                                        <Tab sx={{ color: 'white' }} label='Posts' value='Posts' />
                                        <Divider variant='middle' />
                                        <Tab sx={{ color: 'white' }} label='Gallery' value='Gallery' />
                                        <Divider variant='middle' />
                                        <Tab sx={{ color: 'white' }} label='ToDo' value='ToDo' />
                                    </Tabs>
                                </Box>
                            </div>
                        </div>
                        <div className='col-10 my-3 px-5' style={{ height: '800px' }}>
                            <div class='row'>
                                <Navbar />
                                <div className='my-4'>
                                    <Divider />
                                </div>
                            </div>
                            <div class='row tab-panel'>
                                <TabPanel value={'Profile'}>
                                    <div className='row'>
                                        <div class='col-5'>
                                            <Details />
                                        </div>
                                        <div class='col-7 border-start'>
                                            <Address />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={'Posts'}>
                                    <CommingSoon />
                                </TabPanel>
                                <TabPanel value={'Gallery'}>
                                    <CommingSoon />
                                </TabPanel>
                                <TabPanel value={'ToDo'}>
                                    <CommingSoon />
                                </TabPanel>
                            </div>
                        </div>
                    </TabContext>
                </div>
            </div>
        </>
    );
}

export default profile;
