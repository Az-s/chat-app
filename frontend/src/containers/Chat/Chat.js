import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatForm from '../../components/ChatForm/ChatForm';
import { fetchMessages, deleteMessage } from '../../store/actions/chatActions';
import Progress from '../../components/UI/Progress/Progress';

const Chat = () => {
    const dispatch = useDispatch();
    const ws = useRef(null);


    const messages = useSelector(state => state.chat.messages);
    const message = useSelector(state => state.chat.message);
    const fetchLoading = useSelector(state => state.chat.fetchLoading);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8000/chat');

        ws.current.onmessage = e => {
            const decodedMessage = JSON.parse(e.data);

            switch (decodedMessage.type) {
                case 'NEW_MESSAGE':
                    messages(prev => [
                        ...prev,
                        decodedMessage.message,
                    ]);
                    break;
                default:
                    break;
            }
        }

    }, [])

    const usernameSetHandler = event => {
        event.preventDefault();

        const message = JSON.stringify({
            type: 'SET_USERNAME',
            user
        });

        ws.current.send(message);
    };

    const sendMessageHandler = event => {
        event.preventDefault();

        const message = JSON.stringify({
            type: 'CREATE_MESSAGE',
            message
        });

        ws.current.send(message);
    };


    const deleteMessage = async (id) => {
        try {
            await dispatch(deleteMessage(id));
        } catch (e) {
            console.log('error happened');
        }
    };

    return (
        <Grid container justifyContent='center' sx={{ border: '1px solid #000', borderRadius: '10px' }}>
            <Grid item container alignItems="center" m={3} sx={{ float: 'left' }}>
                <Grid item >
                    <Typography variant="h4">Chat room</Typography>
                    <Divider variant="middle" sx={{ minWidth: '100%' }} />
                </Grid>
            </Grid>
            <Grid item>
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
                {fetchLoading ? (
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <Progress />
                        </Grid>
                    </Grid>
                ) : messages.map(msg => (
                    <Paper key={msg.id}>
                        <List sx={{ width: '100%', minWidth: 700, bgcolor: 'background.paper' }}>
                            <>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={msg.username}
                                        secondary={
                                            <React.Fragment>
                                                {` — ${msg.message}`}
                                            </React.Fragment>
                                        }
                                    />
                                    {user?.role === 'admin' && (
                                        <Grid item>
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() => deleteMessage(msg.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Grid>
                                    )}
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        </List>
                    </Paper>
                ))}
            </Grid>
            <Grid item m={2}>
                <ChatForm />
            </Grid>
        </Grid>
    )
}

export default Chat;
