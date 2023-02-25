import {Box, Container, Typography, ListItem, Button, Link, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'; 
import { ChangeEventHandler, FC, PropsWithChildren} from "react";
import NextLink from 'next/link'



type Props = {
    icon: React.ReactNode;
}

export const DashboardListItem : FC<PropsWithChildren<Props>> = (props) => { 

    const {children, icon} = props;

    return(
        <>
            <Link href="/dashboard" component={NextLink} sx={{textDecoration: "none", color: "white"}}> 
                <ListItem disablePadding>
                        <ListItemButton> 
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={children} sx={{fontSize: "20px"}} />
                        </ListItemButton>
                    </ListItem>
            </Link>
        </>
    )


}