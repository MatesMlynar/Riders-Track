import { Box, Container, Typography, ListItem, Button, Link, Grid, Paper } from '@mui/material'; 
import { ChangeEventHandler, FC} from "react";
import {BenefitItem} from "./benefitItem";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';
import NextLink from 'next/link'


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
                                St??hni si aplikaci do telefonu!
                            </Typography>

                            <Box component="span" 
                            sx={{
                                
                            }}> 
                                <Typography sx={{fontSize: {xs: "17px", md: "25px", xl: "17px"}, color: "#5E5E5E", fontWeight: "300", fontStyle: "italic", textAlign: {
                                    xs: "center",
                                    md: "right"
                                }}}> 
                                    a maximalizuj sv??j z????itek naplno..!
                                </Typography>

                            </Box>
                            
                        </Box>

                        {/*Right side - middle*/}
                        
                        <Grid container spacing={4} sx={{maxWidth: "740px"}}> 

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<EditLocationAltIcon sx={{ fontSize: "45px",}}/>} 
                                    children={"Mo??nost sledovat sv?? p????tele na ??iv?? map??"}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<MapIcon sx={{ fontSize: "45px",}}/>}
                                    
                                 children={"Zaznamen??vej sv?? trasy a sd??lej je s ostatn??mi"}/>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<PeopleIcon sx={{fontSize: "45px"}}/>} children={"P??id??vej si nov?? p????tel?? a sd??lej z????itky z cest"}/>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <BenefitItem icon={<SentimentVerySatisfiedSharpIcon sx={{fontSize: "45px"}}/>} children={"Zpest??i sv?? cestov??n?? a u??ij si ka??dou chvilku"}/> 
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

                            {/*TODO - add links*/}
                            
                            <Box component="img" src="/images/others/android.png" sx={{maxWidth: "200px", width: "100%", height: "65px", objectFit: "cover"}}/> 
                        
                            <Box component="img" src="/images/others/ios.png" sx={{maxWidth: "200px", width: "100%", height: "65px", objectFit: "cover"}}/> 
                            

                        </Box>


                    </Box>


                </Box>
                
            </Container> 
        
        </>
    )
}