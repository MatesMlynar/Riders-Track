import { ChangeEventHandler, FC, PropsWithChildren} from "react";
import { Box, Container, Typography, ListItem, Button, Link, Grid, Paper, SvgIcon} from '@mui/material'; 

type Props = {
    icon: React.ReactNode;
    value: string;
    title: string;
}

export const DashboardStatsItem : FC<Props> = (props) => {

    const {icon, value, title} = props

    return(

        <Box sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            maxWidth: "244px", 
            width:"100%",
            borderRadius: "15px",
            background: "white",
            boxShadow: "10px 15px 25px rgba(0, 0, 0, 0.2)",
            padding: "15px 0"
        }}>

            {/* Item top */}
            <Box sx={{
                display: "flex", 
                alignItems: "center", 
                gap: "15px"
            }}>

                {icon}

                <Box sx={{
                    fontSize: "19px", 
                    color: "black", 
                    fontWeight: "600"
                }}>
                    {title}
                </Box>

            </Box>

            {/*Item bottom*/}
            <Box sx={{fontSize: "40px", 
                color: "#0052D4", 
                fontWeight: "800"
            }}>
                {value}
            </Box>

        </Box>

    )

}