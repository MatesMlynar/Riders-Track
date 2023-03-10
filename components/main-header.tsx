import {Box, Container, Typography, ListItem, Button, Link} from '@mui/material'; 
import CreateIcon from '@mui/icons-material/Create';
import { ChangeEventHandler, FC} from "react";
import NextLink from 'next/link'
import { useState, useEffect } from 'react';
import { usePeopleQuery, useMotoStatsQuery } from './../generated/graphql';



export const MainHeaderComponent : FC<{}> = () => 
{
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, [setVisible])

    const {data, loading, error} = useMotoStatsQuery();
    if(data)
    {
        console.log(data?.motoStats[0].topSpeed)
    }

    {/*Main-header*/}
    return(

            <Box sx={{
                padding: {
                    md: "250px 48px 0 48px",
                    lg: "280px 48px 0 48px",
                },
                position: "relative",
                height: {
                    xs: "auto",
                    md: "100%",
                },
            }}>
                {/* Main-header__figure */}
                <Box sx={{
                    position: {
                        xs: 'relative',
                        md: 'absolute',
                    },
                    height: {xs: "44vh", sm: "auto"},
                    top: {
                        md: "0",
                    },
                    bottom: {
                        md: "0",
                    },
                    left: {
                        md: "0",
                    },
                    right: {
                        md: "0",
                    },
                    paddingTop: {
                        xs: "90px",
                    },
                    marginBottom: {
                        xs: "30px",
                        md: "0",
                    },
                    
                    

                }}>

                        {/*Main-header__image*/}
                        <Box src="/images/background/background_panigale.png" component="img" 
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}>
                        </Box>
                </Box>

            <Container maxWidth="xl" sx={{
                height:{
                    xs: "auto",
                    md: "100%"
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                }}> 
        

                    {/*Main-header__content*/}
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        gap: {xs: "30px",md: "50px"},
                        height: "100%",
                        opacity: visible ? 1 : 0,
                        transition: 'ease 0.5s',
                        maxWidth: {lg:"860px", xl: "1000px"}
                    }}>
                        
                        <Typography variant='h1' sx={{
                            fontSize: {
                                xs: 22,
                                sm: 28,
                                xl: 42
                            },
                            color: {
                                xs: "black",
                                md: "white"
                            }
                            
                        }}>
                        Vezmi sv?? cestov??n?? na motork??ch na dal???? ??rove?? <br></br> a zaznamenej si                  ka??dou kr??snou trasu s na???? aplikac??!

                        </Typography>

                        <Typography variant='h3' sx={{
                            fontSize: {
                                xs: 18,
                                sm: 20,
                                xl: "22px"
                            },
                            color: {
                                xs: "black",
                                md: "white"
                            },
                            fontWeight: {
                                xs: "350",
                                md: "400",
                            },
                            fontStyle: "italic"
                        }}>
                            Pro motork????e, kte???? miluj?? cestov??n?? na sv??ch stroj??ch, p??ich??z?? nov?? webov?? str??nka <br/> pln?? funkc??, kter?? zpest???? va??e cestov??n??. Tato str??nka je pro v??echny motork????e, <br/> kte???? cht??j?? v??c ne?? jen jezdit, je to pro ty, kte???? cht??j?? pro????t cestov??n?? naplno. 
                        </Typography>


                        {/*Main-header__link*/}

                        <Link href="/" component={NextLink} sx={{
                            border: {
                                xs: "1px solid black",
                            },
                            color: {
                                xs: "black",
                                md: "primary.light",
                            },
                            maxWidth: {
                                md: "227px"
                            },
                            width: "100%",
                            borderRadius: "0",
                            padding: "10px 10px 10px 5px",
                            transition: "0.3s ease-out",
                            display: "flex",
                            backgroundColor: "#E22222",
                            justifyContent: "center",
                            alignContent: "center",
                            textDecoration: "none",
                            "&:hover": {border: "1px solid #FFF"}
                            
                        }}
                        >
                            <CreateIcon sx={{marginRight:"8px", marginTop: "2px", fontSize:"20px", color: {
                                xs: "black",
                                md: "white",
                            }}} /> 
                        VYTVO??IT SI ????ET
                        </Link>

                    </Box>
                    
                </Container>    
        </Box>
            
        
    )
}

