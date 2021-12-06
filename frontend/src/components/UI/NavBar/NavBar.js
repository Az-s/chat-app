import React from 'react';
import { AppBar, Box, Toolbar, Typography, Grid, } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from './Menu/UserMenu';
import AnonymousMenu from './Menu/AnonymousMenu';

const NavBar = () => {
    const user = useSelector(state => state.users.user);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ color: 'white', textDecoration: 'none', flexGrow: 1 }} component={Link} to="/">
                        Chat
                    </Typography>
                    <Grid item>
                        {user ? (
                            <UserMenu user={user} />
                        ) : (
                            <AnonymousMenu />
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;
