import {Box, Container, Typography, ListItem, Button, Link, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'; 
import {FC} from "react";

import DashboardIcon from '@mui/icons-material/Dashboard';
import ForumIcon from '@mui/icons-material/Forum';
import MapIcon from '@mui/icons-material/Map';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import NextLink from 'next/link'
import { DashboardListItem } from './dashboardListItem';

export const DashboardNavigation : FC<{}> = () => {


    return(

        <Box sx={{
            paddingTop: "20px",
            maxWidth: "282px",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom,#D60909, #FF7700)",
            alignItems: "center",
            display: {
                xs: "none",
                lg: "flex",
            },
            flexDirection: "column",
        }}>
            {/*navigation container*/}


            {/*Logo wrapper*/}
            <Box sx ={{
                width: "214px",
                height: "106px",
            }}> 

                <Link href="/" component={NextLink}>
                            <Box
                                component="img"
                                alt="Logo dashboard stránky"
                                sx ={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                src="/images/logo/DashboardLogoBlack.png"
                            />
                </Link>

            </Box>

            
            {/*navigation bottom*/}
            <Box sx={{display: "flex", justifyContent: "space-between", padding: "100px 0", flexDirection: "column", height: "100%"}}> 

                {/*TODO - dodelat odkazy a posilat dynamicke jmeno*/}
                {/*Navigation list*/}
                <List> 
                    <DashboardListItem color="white" icon={<DashboardIcon sx={{color: "white", width: "27px", height: "27px"}}/>} children={"Dashboard"}/>
                    <DashboardListItem color="white" icon={<ForumIcon sx={{color: "white", width: "27px", height: "27px"}}/>} children={"Chat"}/>
                    <DashboardListItem color="white" icon={<MapIcon sx={{color: "white", width: "27px", height: "27px"}}/>} children={"Živá mapa"}/>
                </List>


                {/*extra settings*/}

                <List> 
                    <DashboardListItem color="white" icon={<AccountBoxIcon sx={{color: "white", width: "27px", height: "27px"}}/>} children={"Matěj Mlynář"}/>
                    <DashboardListItem color="white" icon={<SettingsIcon sx={{color: "white", width: "27px", height: "27px"}}/>} children={"Nastavení"}/>
                </List>


            </Box>
                        
               

        </Box>
        
    )

}