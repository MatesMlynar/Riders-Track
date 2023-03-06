import { DashboardNavigation } from "@/components/Dashboard/dashboardNavigation";
import { DashboardShape } from "@/components/Dashboard/DashboardShape";
import { DashboardContent } from "@/components/Dashboard/DashboardContent";
import {Box, AppBar, Toolbar, Typography, Button, List, Link} from '@mui/material'; 
import {NextPage} from "next";
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { SwipeableDrawer } from '@mui/material';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DashboardListItem } from '../components/Dashboard/dashboardListItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ForumIcon from '@mui/icons-material/Forum';
import MapIcon from '@mui/icons-material/Map';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import {useState} from "react";
import IconButton from '@mui/material/IconButton';

const dashboard : NextPage = () => {

    const [open, setOpen] = useState(false)

    return(
        <>

            {/*Layout on small device (navbar)*/}
            <Box 
                sx={{ 
                    flexGrow: 1,
                    display: {
                        xs: "flex",
                        lg: "none"
                    },
                    maxHeight: "80px",
                    height: "100%",
                    alignItems: "center",
                    position: "fixed",
                    width: "100%"
                }}>
                <AppBar position="static" sx={{height: "100%", display: "flex", justifyContent: "center"}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Rider's Track
                    </Typography>
                    <Avatar alt="Remy Sharp" src="/images/others/avatar1.jpg" />
                    </Toolbar>
                </AppBar>
            </Box>
            <SwipeableDrawer anchor="left" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}
            sx={{
                display: {
                    lg: "none"
                },
            }}> 

                <IconButton onClick={() => setOpen(false)}> 
                    <ChevronRightIcon sx={{height: "50px", fontSize: "40px", color: "black"}}/>
                </IconButton>
                <Divider />

                <Box sx={{display: "flex", justifyContent: "space-between", padding: "100px 0", flexDirection: "column", height: "100%", color: "black"}}> 

                    {/*TODO - dodelat odkazy a posilat dynamicke jmeno*/}
                    {/*Navigation list*/}
                    <List> 
                        <DashboardListItem icon={<DashboardIcon sx={{color: "black", width: "27px", height: "27px"}}/>} children={"Dashboard"}/>
                        <DashboardListItem icon={<ForumIcon sx={{color: "black", width: "27px", height: "27px"}}/>} children={"Chat"}/>
                        <DashboardListItem icon={<MapIcon sx={{color: "black", width: "27px", height: "27px"}}/>} children={"Živá mapa"}/>
                    </List>


                    {/*extra settings*/}

                    <List> 
                        <DashboardListItem icon={<AccountBoxIcon sx={{color: "black", width: "27px", height: "27px"}}/>} children={"Matěj Mlynář"}/>
                        <DashboardListItem icon={<SettingsIcon sx={{color: "black", width: "27px", height: "27px"}}/>} children={"Nastavení"}/>
                    </List>


                </Box>


            </SwipeableDrawer>

            <Box sx={{
                display: "flex", 
                justifyContent: "space-between", 
                width: "100%", 
                height: "100%",
                overflowY: {
                    lg: "hidden"
                }
            }}>

                {/*Dashboard -- left side (navigation)*/}
                <DashboardNavigation/>


                {/*Dashboard -- middle (content)*/}
                <Box sx={{flexGrow: "1"}}> 
                    <DashboardContent></DashboardContent>
                </Box>

                {/*Dashboard -- right side (shape)*/}
                <DashboardShape/>

            </Box>

        </>
    )
}

export default dashboard;