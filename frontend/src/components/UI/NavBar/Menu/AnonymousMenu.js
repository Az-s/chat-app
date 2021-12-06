import React from 'react';
import {Link} from "react-router-dom";
import { Button } from '@mui/material';

const AnonymousMenu = () => {
    return (
        <>
            <Button component={Link} to="/login" color="inherit">Sign in</Button>
        </>
    )
}

export default AnonymousMenu;