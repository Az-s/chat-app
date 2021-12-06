import React, { useEffect } from 'react';
import { Box, Divider, Grid, List, ListItem, ListItemButton, Typography, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../store/actions/usersActions';
import Progress from '../../components/UI/Progress/Progress';

const Users = () => {
    const dispatch = useDispatch();

    const fetchLoading = useSelector(state => state.chat.fetchLoading);
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid #000', borderRadius: '10px' }}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            Online users
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <List>
                    {/* <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="John" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Mark" />
                        </ListItemButton>
                    </ListItem> */}
                    {fetchLoading ? (
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item>
                                <Progress />
                            </Grid>
                        </Grid>
                    ) : users.map(user => (
                        <ListItem disablePadding key={user.id}>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary={user.username} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default Users;
