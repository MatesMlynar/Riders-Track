import { Box, Container, Typography, ListItem, Button, Link, Grid, Paper } from '@mui/material'; 
import { ChangeEventHandler, FC} from "react";
import { DashboardStatsItem } from "@/components/Dashboard/DashboardStatsItem";
import { DashboardRideItem } from "@/components/Dashboard/DashboardRideItem";
import SpeedIcon from '@mui/icons-material/Speed';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PlaceIcon from '@mui/icons-material/Place';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

export const DashboardContent : FC<{}> = () => {

    return(
        <>
            <Box sx={{padding: {
                xs: "50px 30px",
                lg: "50px 100px",
                xl: "80px 150px",
                height: "100%",
            }}}>

                {/* Dashboard stats (top) */} 
                <Box sx={{}}>
                    <Typography variant="h3" sx={{
                        fontSize: "20px",
                        color: "#0052D4",
                        marginBottom: "25px",
                        textAlign: {
                            xs: "center",
                            md: "left",
                        }
                    }}>
                        DASHBOARD
                    </Typography>

                    {/* Dashboard stats items */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: {
                            xs: "15px",
                            md: "25px",
                            lg: "35px",
                            xl: "60px"
                        },
                        marginBottom: {
                            md: "30px",
                            lg: "60px",
                            
                        },
                        flexWrap: "wrap"
                    }}> 


                        {/* Dashboard stats item */}
                        <DashboardStatsItem icon={<SpeedIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Top speed"} value={205} componentType={"topSpeed"}></DashboardStatsItem>
                        
                        <DashboardStatsItem icon={<AvTimerIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Čas na cestách"} value={168} componentType={"timeSpent"}></DashboardStatsItem>

                        <DashboardStatsItem icon={<PlaceIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Ujetá vzdálenost"} value={2531} componentType={"totalDistance"}></DashboardStatsItem>

                        <DashboardStatsItem icon={<SportsMotorsportsIcon sx={{width: "37px", height: "37px", color: "black"}} />} title={"Jízd celkem"} value={108} componentType={"totalRides"}></DashboardStatsItem>


                    </Box>

                    


                </Box>
                
                {/*Dashboard - rides*/}
                <Box sx={{
                }}>

                    <Typography variant="h2" sx={{
                        fontSize: "40px",
                        color: "#0052D4",
                        marginBottom: "25px",
                        textAlign: {
                            xs: "center",
                            md: "left",
                        }
                    }}>
                        Poohlédnutí se po mých cestách
                    </Typography>


                    {/*Dashboard - rides items*/}
                    
                    <Box sx={{
                        display: "flex",
                        gap: "50px",
                        flexWrap: "wrap",
                        maxHeight: {
                            xs: "380px",
                            xl: "480px",
                        },
                        height: "100%",
                        overflowY: "scroll",
                        paddingBottom: {
                            xs: "180px",
                            xl: "195px",
                        },
                    }}> 

                        <DashboardRideItem title={"S kamarády až do Rumunska"} date={"25.6. 2022 - 5.7.2022"} maxSpeed={102} totalDistance={680.3} href={"#"}/>

                        <DashboardRideItem title={"S kamarády až do Rumunska"} date={"25.6. 2022 - 5.7.2022"} maxSpeed={102} totalDistance={680.3} href={"#"}/>

                        <DashboardRideItem title={"S kamarády až do Rumunska"} date={"25.6. 2022 - 5.7.2022"} maxSpeed={102} totalDistance={680.3} href={"#"}/>

                        <DashboardRideItem title={"S kamarády až do Rumunska"} date={"25.6. 2022 - 5.7.2022"} maxSpeed={102} totalDistance={680.3} href={"#"}/>

                        <DashboardRideItem title={"S kamarády až do Rumunska"} date={"25.6. 2022 - 5.7.2022"} maxSpeed={102} totalDistance={680.3} href={"#"}/>


                    </Box>


                </Box>


            </Box>
        

        </>
    )

}