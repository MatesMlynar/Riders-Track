import { ChangeEventHandler, FC, PropsWithChildren} from "react";
import { Box, Container, Typography, ListItem, Button, Link, Grid, Paper, SvgIcon} from '@mui/material'; 

type Props = {
    icon: React.ReactNode;
    value: number;
    title: string;
    componentType: string;
}

export const DashboardStatsItem : FC<Props> = (props) => {

    const {icon, value, title, componentType} = props

    let unit = "";

    switch(componentType){
        case "topSpeed":
            unit = "km/h";
            break;
        case "timeSpent":
            unit = "h"
            break;
        case "totalDistance": 
            unit = "km";
            break;
        case "totalRides":
            unit = "x"
            break;
    }


    return(

        <Box sx={{
            display: "flex", 
            flexDirection: {
                xs: "row",
                lg: "column",
            }, 
            justifyContent: {
                xs: "space-between",
                lg: "flex-start",
            },
            alignItems: "center", 
            maxWidth: {
                xs: "100%",
                lg: "200px",
                xl: "244px",
            },
            width: "100%",
            borderRadius: "15px",
            background: "white",
            boxShadow: "10px 15px 25px rgba(0, 0, 0, 0.2)",
            padding:{
                xs: "15px 10px",
                lg: "15px 0",
                xl: "15px 0",
            },
        }}>

            {/* Item top */}
            <Box sx={{
                display: "flex", 
                alignItems: "center", 
                gap: {
                    xs: "15px",
                    lg: "5px",
                    xl: "10px"
                },
                flexDirection: {
                    lg: "column",
                    xl: "row"
                }
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
            <Box sx={{fontSize: {
                md:"25px",
                lg: "40px",
            },
                color: "#0052D4", 
                fontWeight: "800"
            }}>
                {value} {unit}
            </Box>

        </Box>

    )

}