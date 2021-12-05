import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <NavBar />
            <main>
                <Container maxWidth="xl">
                    {children}
                </Container>
            </main>
        </>
    )
}

export default Layout;
