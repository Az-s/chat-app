import React from 'react';
import { Grid } from '@mui/material';
import Users from '../Users/Users';
import Chat from '../Chat/Chat';

const MainPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid container mt={5}>
                <Grid item xs={4} >
                    <Users />
                </Grid>
                <Grid item xs={8} >
                    <Chat />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPage;
