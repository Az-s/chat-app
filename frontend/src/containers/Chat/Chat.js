import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { FixedSizeList } from 'react-window';
import ChatForm from '../../components/ChatForm/ChatForm';

const Chat = () => {

    return (
        <Grid container justifyContent='center' sx={{ border: '1px solid #000', borderRadius: '10px' }}>
            <Grid item container alignItems="center" m={3} sx={{ float: 'left' }}>
                <Grid item >
                    <Typography variant="h4">Chat room</Typography>
                    <Divider variant="middle" sx={{ minWidth: '100%' }} />
                </Grid>
            </Grid>
            <Grid item>
                {/* <FixedSizeList
                    height={600}
                    width={800}
                    itemSize={46}
                    rowCount={30}
                    overscanCount={5}
                >
                    {massagesList}
                </FixedSizeList> */}
                <Paper>
                    <List sx={{ width: '100%', minWidth: 700, bgcolor: 'background.paper' }}>
                        <>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary='John'
                                    secondary={
                                        <React.Fragment>
                                            {` — Hello`}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    </List>
                </Paper>
            </Grid>
            <Grid item m={2}>
                <ChatForm />
            </Grid> 
        </Grid>
    )
}

export default Chat;
