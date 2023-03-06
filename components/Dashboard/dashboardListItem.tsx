import {Box, Container, Typography, ListItem, Button, Link, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'; 
import { ChangeEventHandler, FC, PropsWithChildren} from "react";
import NextLink from 'next/link'



type Props = {
    icon: React.ReactNode;
    color?: string;
}

export const DashboardListItem : FC<PropsWithChildren<Props>> = (props) => { 

    const {children, icon, color} = props;

    return(
        <>
            <Link href="/dashboard" component={NextLink} sx={{textDecoration: "none", color: {color}}}> 
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