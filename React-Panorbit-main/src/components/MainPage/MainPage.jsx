import React from 'react';
import './MainPage.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser, setLastLoggedUsers } from '../../redux/actions/actions';

function MainPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { panorbitData, lastLoggedUsers } = useSelector((state) => state);
    
    const handleProfile = (profile) => {
        const lastLog = [...lastLoggedUsers];
        if (lastLog.length > 3) {
            lastLog.shift();
            lastLog.push(profile);
        }
        dispatch(setCurrentUser(profile));
        dispatch(setLastLoggedUsers(lastLog));
        navigate('/profile');
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='main_page_list'>
                    <h4 class='text-center'>Select an account</h4>
                    <div className='list_container px-3'>
                        {panorbitData.map((profile) => {
                            return (
                                <List
                                    sx={{
                                        width: '100%',
                                        padding: 0,
                                    }}
                                >
                                    <ListItem key={profile.id} onClick={() => handleProfile(profile)} sx={{ cursor: 'pointer', fontSize: 18 }}>
                                        <ListItemAvatar>
                                            <Avatar alt={profile.name} src={profile.profilepicture}></Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={profile.name} />
                                    </ListItem>
                                    <Divider variant='middle' />
                                </List>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
