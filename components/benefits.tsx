import { Box, Container, Typography, ListItem, Button, Link, Grid, Paper } from '@mui/material'; 
import { ChangeEventHandler, FC} from "react";
import {BenefitItem} from "./benefitItem";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';


export const BenefitsComponent : FC<{}> = () => {
    return (
        <>
        
            <Container maxWidth="xl" sx={{position: "relative"}}>

                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    padding: {
                        xs: "65px 0 100px 0",
                        md: "100px 0 100px 0"
                    }
                }}>

                    {/* Phone - left side */}  
                    <Box component="img" sx={{
                        maxWidth: "250px",
                        width: "100%",
                        maxHeight: "670px",
                        height: "100%",
                        transform: {
                            md: "rotate(-10deg)",
                        },
                    }} src="/images/phone.png">
 


                    </Box>

                    
                    {/* Right side */}  
                    <Box>
                        
                        {/*Right side - top*/}
                        <Box sx={{mb: "40px"}}>

                            <Typography variant="h2" sx={{
                                color: "black", 
                                fontWeight: "700",
                                fontSize: {
                                    xs: "25px",
                                    md: "45px"
                                },
                                textAlign: "center"
                            }}>
                                Stáhni si aplikaci do telefonu!
                            </Typography>

                            <Box component="span" 
                            sx={{
                                
                            }}> 
                                <Typography sx={{fontSize: {xs: "17px", md: "25px", xl: "17px"}, color: "#5E5E5E", fontWeight: "300", fontStyle: "italic", textAlign: {
                                    xs: "center",
                                    md: "right"
                                }}}> 
                                    a maximalizuj svůj zážitek naplno..!
                                </Typography>

                            </Box>
                            
                        </Box>

                        {/*Right side - middle*/}
                        
                        <Grid container spacing={4} sx={{maxWidth: "740px"}}> 

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<EditLocationAltIcon sx={{ fontSize: "45px",}}/>} 
                                    children={"Možnost sledovat své přátele na živé mapě"}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<MapIcon sx={{ fontSize: "45px",}}/>}
                                    
                                 children={"Zaznamenávej své trasy a sdílej je s ostatními"}/>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<PeopleIcon sx={{fontSize: "45px"}}/>} children={"Přidávej si nové přátelé a sdílej zážitky z cest"}/>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<SentimentVerySatisfiedSharpIcon sx={{fontSize: "45px"}}/>} children={"Zpestři své cestování a užij si každou chvilku"}/> 
                            </Grid>

                        </Grid>

                        {/* Right side - bottom*/}
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "40px",
                            gap: "30px",
                            flexWrap: "wrap"
                        }}>

                            <Box component="img" src="/images/others/android.png" sx={{maxWidth: "200px", width: "100%", height: "65px", objectFit: "cover"}}/> 
                            <Box component="img" src="/images/others/ios.png" sx={{maxWidth: "200px", width: "100%", height: "65px", objectFit: "cover"}}/>


                        </Box>


                    </Box>


                </Box>
                
            </Container> 
        
        </>
    )
}