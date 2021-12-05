import React, { useState } from 'react';
import { TextField, Grid, Button, Stack } from '@mui/material';
import { useDispatch } from "react-redux";
import { createMessage } from '../../store/actions/chatActions';
import SendIcon from '@mui/icons-material/Send';

const ChatForm = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        message: '',
    });

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setState(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    console.log(state)

    const onSubmit = async (e) => {
        try {
            await dispatch(createMessage({ ...state }));
        } catch (e) {
            console.log('error happened');
        }
    };

    return (
        <Grid container>
            <Stack direction="row" spacing={2} sx={{minWidth: 700}} component='form' onSubmit={onSubmit}>
                <TextField
                    fullWidth
                    label="Enter message"
                    variant="outlined"
                    type="text"
                    name="message"
                    value={state.message}
                    onChange={inputChangeHandler}
                />
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
        </Grid>
    )
}

export default ChatForm;
