import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Link, Avatar, Paper, Container} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

export const HeaderComponent = () => {
    return(
        //header
        <AppBar position='fixed' sx={{
            height: "110px",
            backgroundColor: "white", 
            display: "flex", 
            justifyContent: "center" 
            }}>

            {/*layout*/}
            <Container maxWidth="lg">

                {/*header content*/}
                <Toolbar sx={{
                    display: "flex", 
                    justifyContent: 'space-between'
                    }}>

                    {/*header logo*/}
                    <Link href="/">
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
                    <Link href="/" style={{textDecoration: 'none'}}>

                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Box component="span" sx={{marginRight: "5px"}}>
                                Přihlásit se
                            </Box>
                            <LoginIcon />
                        </Box>

                    </Link>
                    
                </Toolbar>

            </Container>

            

        </AppBar>
    )

}

