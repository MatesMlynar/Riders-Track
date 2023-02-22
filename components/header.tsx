import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Paper, Container} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import NextLink from 'next/link'
import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';


export const HeaderComponent = () => {
    return(
        //header
        <AppBar position='fixed' sx={{
            height: "90px",
            backgroundColor: "white", 
            display: "flex", 
            justifyContent: "center" 
            }}>

            {/*layout*/}
            <Container maxWidth="xl">

                {/*header content*/}
                <Toolbar sx={{
                    display: "flex", 
                    justifyContent: 'space-between'
                    }}>

                    {/*header logo*/}
                    <Link href="/" component={NextLink}>
                        <Box
                            component="img"
                            alt="Logo webové stránky"
                            sx ={{
                                width: "150px",
                                height: "95px",
                                marginTop: "20px",
                            }}
                            src="/images/logo/final-light-logo.png"
                        />
                    </Link>

                    {/*login link*/}

                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Link href="/signIn" style={{textDecoration: "none", display: "flex", alignItems: "center"}} component={NextLink} variant="body2">
                            <Box component="span" sx={{marginRight: "5px", textDecoration: "none", fontWeight: "bold"}}>
                                Přihlásit se
                            </Box>
                            <LoginIcon />
                        </Link>
                    </Box>
                        
                </Toolbar>

            </Container>

            

        </AppBar>
    )

}

