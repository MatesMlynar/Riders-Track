import { Box, Container, Typography, ListItem, Button, Link, Grid, Paper } from '@mui/material'; 
import { ChangeEventHandler, FC} from "react";
import { DashboardStatsItem } from "@/components/Dashboard/DashboardStatsItem";
import SpeedIcon from '@mui/icons-material/Speed';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PlaceIcon from '@mui/icons-material/Place';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

export const DashboardContent : FC<{}> = () => {

    return(
        <>
            <Box sx={{padding: "100px 150px"}}>
                {/* Dashboard stats (top) */} 
                <Box sx={{}}>
                    <Typography variant="h3" sx={{
                        fontSize: "20px",
                        color: "#0052D4",
                        marginBottom: "25px",
                    }}>
                        DASHBOARD
                    </Typography>

                    {/* Dashboard stats items */}
                    <Box sx={{
                        display: "flex",
                        gap: "60px"
                    }}> 


                        {/* Dashboard stats item */}
                        <DashboardStatsItem icon={<SpeedIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Top speed"} value={"205 KM/H"}></DashboardStatsItem>
                        
                        <DashboardStatsItem icon={<AvTimerIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Čas na cestách"} value={"4d 22h"}></DashboardStatsItem>

                        <DashboardStatsItem icon={<PlaceIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Ujetá vzdálenost"} value={"2531 KM"}></DashboardStatsItem>

                        <DashboardStatsItem icon={<SportsMotorsportsIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Jízd celkem"} value={"108"}></DashboardStatsItem>


                    </Box>

                    


                </Box>
                


            </Box>
        

        </>
    )

}