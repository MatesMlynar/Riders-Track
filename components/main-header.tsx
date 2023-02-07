import {Box, Container, Typography, ListItem, Button, Link} from '@mui/material'; 
import CreateIcon from '@mui/icons-material/Create';
import { ChangeEventHandler, FC} from "react";
import NextLink from 'next/link'
import { useState, useEffect } from 'react';

export const MainHeaderComponent : FC<{}> = () => 
{
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, [setVisible])


    {/*Main-header*/}
    return(
            <Box sx={{
                padding: {
                    md: "250px 48px 0 48px",
                    lg: "200px 48px 0 48px",
                    xl: "300px 48px 0 48px"
                },
                height: "100%",
            }}>
                {/* Main-header__figure */}
                <Box sx={{
                    position: {
                        xs: 'relative',
                        md: 'absolute',
                    },
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
                        xs: "110px",
                    },
                    marginBottom: {
                        xs: "30px",
                        md: "0",
                    },
                    

                }}>

                        {/*Main-header__image*/}
                        <Box src="/images/background/background_dark.png" component="img" 
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block"
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
                        gap: "30px",
                        height: "100%",
                        opacity: visible ? 1 : 0,
                        transition: 'ease 0.5s',
                    }}>
                        
                        <Typography variant='h1' sx={{
                            fontSize: {
                                xs: 22,
                                sm: 30,
                                xl: 35
                            },
                            color: {
                                xs: "black",
                                md: "white"
                            }
                            
                        }}>
                        Vezmi své cestování na motorkách na další úroveň <br></br> a zaznamenej si                  každou krásnou trasu s naší aplikací!

                        </Typography>

                        <Typography variant='h3' sx={{
                            fontSize: {
                                xs: 18,
                                sm: 20,
                                xl: "25px"
                            },
                            color: {
                                xs: "black",
                                md: "white"
                            },
                            fontStyle: "italic"
                        }}>
                            Webová stránka plná funkcí, které usnadní a zpestří vaše cesty. 
                        </Typography>

                        {/*Main-header__list*/}
                        <Box> 
                            <ListItem sx={{
                                display: "list-item", 
                                fontWeight: "700", 
                                fontSize: {
                                    xs: "16px",
                                    lg: "18px",
                                    xl: "20px"
                                },
                                color: {
                                    xs: "black",
                                    md: "white",
                                },
                                marginBottom: {
                                    xs: "10px",
                                    md: "0"
                                }
                            }}
                                
                                
                                disablePadding> 
                                Možnost sledovat své přátele na živé mapě
                            </ListItem>

                            <ListItem sx={{
                                display: "list-item", 
                                fontWeight: "700", 
                                fontSize: {
                                    xs: "16px",
                                    lg: "18px",
                                    xl: "20px"
                                },
                                color: {
                                    xs: "black",
                                    md: "white",
                                }, 
                                marginBottom: {
                                    xs: "10px",
                                    md: "0"
                                }
                            }}
                                disablePadding> 
                            <Box component="span" sx={{color: "secondary.main", fontWeight: "700"}}> Zaznamenávej </Box> své trasy a sdílej je s ostatními motorkáři
                            </ListItem>

                            <ListItem sx={{
                                display: "list-item", 
                                fontWeight: "700", 
                                fontSize: {
                                    xs: "16px",
                                    lg: "18px",
                                    xl: "20px"
                                },
                                color: {
                                    xs: "black",
                                    md: "white",
                                }, 
                                marginBottom: {
                                    xs: "16px",
                                    md: "0"
                                }
                            }} 
                                disablePadding> 
                                Přidávej si nové přátele a sdílej své zážitky z cest
                            </ListItem>

                            <ListItem sx={{
                                display: "list-item", 
                                fontWeight: "700", 
                                fontSize: {
                                    xs: "16px",
                                    lg: "18px",
                                    xl: "20px"
                                }, 
                                color: {
                                    xs: "black",
                                    md: "white",
                                }, 
                                marginBottom: {
                                    xs: "10px",
                                    md: "0"
                                }
                            }}
                                
                                disablePadding> 
                                Zpestři své cestování na motorkách a <Box component="span" sx={{color: "secondary.main", fontWeight: "700"}}> užij si každou chvilku. </Box>
                            </ListItem>
                        </Box>
                        



                        {/*Main-header__link*/}

                        <Link href="/" sx={{
                            border: {
                                xs: "1px solid black",
                                md: "1px solid #FFF",
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
                            justifyContent: "center",
                            alignContent: "center",
                            textDecoration: "none",
                            "&:hover": {background: "#FF0000"}
                        }}>
                            <CreateIcon sx={{marginRight:"8px", marginTop: "2px", fontSize:"20px", color: {
                                xs: "black",
                                md: "white",
                            }}} /> 
                        ZAREGISTROVAT SE
                        </Link>


                    


                    </Box>

                        {/* Main-header__download-container */}
                    
                    <Box 
                    sx={{
                        position: {
                        xs: "relative",
                        medium: "absolute",
                        }, 
                    maxWidth: "930px", 
                    padding: {
                        xs: "30px 0 20px 0",
                        md: "25px 25px 20px 25px",
                    },
                    backgroundColor: "#fff",
                    display: "flex", 
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    justifyContent: "space-between", 
                    left: {
                        xs: "0",
                        md: "50%"
                    }, 
                    bottom: "0", 
                    transform: {
                        xs: "none",
                        md: "translateX(-50%)"
                    }, 
                    width: "100%"
                    }}> 

                        {/*Container - left side*/}
                        <Box>
                            <Typography variant="h3" sx={{
                                fontSize: {
                                xs: 20,
                            },
                            color: "black",
                            fontWeight: "700"
                            }}> Stáhni si aplikaci do telefonu </Typography>

                            <Typography sx={{color:"black", paddingBottom: {xs: "10px", md: "0"}}}>
                                <Box component="span" sx={{color: "secondary.main", }}>Doporučováno</Box>, umožnuje záznam a publikaci tras
                            </Typography>
                        </Box>

                        {/*Container - right side*/}
                        <Box sx={{
                            display: "flex",
                            gap: {xs: "10px", md: "40px"},
                        }}>

                            <Link href="/">
                                <Box component="img" src="/images/others/android.png" sx={{maxWidth: "170px", maxHeight: "60px", height: "100%", width:"100%", display: "block"}} >
                                </Box>
                            </Link>
                                
                            <Link href="/">
                                <Box component="img" src="/images/others/ios.png" sx={{maxWidth: "170px", maxHeight: "60px", height: "100%", width:"100%", display: "block"}} >
                                </Box>
                            </Link>
                            

                        </Box>
                    </Box>
                    
                </Container>    
        </Box>
            
        
    )
}