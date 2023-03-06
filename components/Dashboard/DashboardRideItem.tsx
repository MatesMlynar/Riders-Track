import { FC} from "react";
import { Box, Container, Typography, Button, Link} from '@mui/material'; 
import NextLink from 'next/link'
import SpeedIcon from '@mui/icons-material/Speed';
import PlaceIcon from '@mui/icons-material/Place';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


type Props = {
    title: string;
    date: string;
    maxSpeed: number;
    totalDistance: number;
    href: string;
}

export const DashboardRideItem : FC<Props> = (props) => {

    const {title, date, maxSpeed, totalDistance, href} = props

    return(


        <Link href="/dashboard" component={NextLink} 
            sx={{
                textDecoration: "none",
                "&:hover": 
                {"& img": {scale: "1.1"}},
            }}>

            <Box sx={{
                maxWidth: "300px",
                width: "100%",
                maxHeight: {
                    lg: "330px",
                    xl: "410px"
                },
                height: "100%",
                background: "white",
                borderRadius: "10%",
                boxShadow: "10px 15px 25px rgba(0, 0, 0, 0.2)",
                marginLeft:"10px",
                overflow: "hidden"
            }}>

                
                {/*<Link href="/" component={NextLink}> 
                </Link>*/}


                {/*Ride-item__image*/}
                <Box component="img" src="images/rideItemHeaderImg/ride1.png" 
                sx={{
                    width: "100%",
                    maxHeight: {
                        lg: "150px",
                        xl: "200px"
                    },
                    height: {
                        xs: "45vw",
                        sm: "auto",
                        lg: "100%",
                    },
                    objectFit: "cover",
                    borderRadius: "10% 10% 0 0",
                    transition: "0.3s ease-out",
                    overflow: "hidden",
                }}> 
                </Box>


                {/*Ride-item__content*/}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    alignItems: "center",
                    padding: "15px 0"
                }}>
                    {/*Content__top*/}
                    <Box>

                        {/* Heading */}
                        <Typography variant="h3" 
                        sx={{
                            fontWeight: "800",
                            fontSize: "17px",
                            color: "black",
                            marginBottom: "10px",
                            textAlign: "center"
                        }}>
                            {title}
                        </Typography>

                        {/* Date */}
                        <Typography variant="h3" 
                        sx={{
                            fontWeight: "300",
                            fontSize: "14px",
                            color: "#707070",
                            textAlign: "center"
                        }}>
                            {date}
                        </Typography>
                        
                    </Box>
                

                    {/*Content__bottom*/}
                    <Box sx={{display:"flex", flexDirection: "row", gap: "5px"}}> 

                        {/*Content__bottom-wrap (for text and icon)*/}
                        <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>

                            <SpeedIcon sx={{color: "black"}} />
                            <Typography variant="h3" 
                                sx={{
                                    fontWeight: "300",
                                    fontSize: "14px",
                                    color: "#707070",
                                    textAlign: "center"
                                }}>
                                102 km/h
                            </Typography>
                            
                        </Box>
                        
                        <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}> 

                            <PlaceIcon sx={{color: "black"}}/> 
                            <Typography variant="h3" 
                                sx={{
                                    fontWeight: "300",
                                    fontSize: "14px",
                                    color: "#707070",
                                    textAlign: "center"
                                }}>
                                680.3 km
                            </Typography>

                        </Box>
                    



                    </Box>





                </Box>

                {/*Content__bottom-button*/}
                <Box 
                    sx={{
                        borderTop: "1px solid black",
                        width: "100%",
                        padding: "15px 40px",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        }}>

                        <Typography variant="h3" 
                                sx={{
                                    fontWeight: "500",
                                    fontSize: "18px",
                                }}>
                                PŘEJÍT NA DETAIL
                        </Typography>

                        <ChevronRightIcon sx={{color: "#4364F7"}}/>
                    
                </Box>



            </Box>        

        </Link>
        
    )


}