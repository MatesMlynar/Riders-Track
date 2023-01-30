import {Box, Container, Typography, ListItem, Button} from '@mui/material'; 
import CreateIcon from '@mui/icons-material/Create';

export const MainHeaderComponent = () => 
{
    {/*Main-header*/}
    return(
        <Box sx={{
            padding: {
                xs: "250px 24px 0 24px",
                md: "250px 48px 0 48px"
            }
        }}>
            {/* Main-header__figure */}
            <Box sx={{
                position: 'absolute',
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                paddingTop: "106px"
            }}>

                    {/*Main-header__image*/}
                    <Box src="/images/background/background_dark.png" component="img" sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                    }}>
                    </Box>
            </Box>


            {/*Main-header__content*/}
            <Box sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                minHeight: "370px",
                height: "100%",
                maxWidth: "750px"
            }}>
                
                <Typography variant='h1' sx={{
                    fontSize: {
                        xs: 20,
                        sm: 25,
                        xl: 30
                    }
                }}>
                Vezmi své cestování na motorkách na další úroveň <br></br> a zaznamenej si                  každou krásnou trasu s naší aplikací!

                </Typography>

                <Typography variant='h3' sx={{
                    fontSize: {
                        xs: 15,
                        sm: 20,
                    },
                    fontStyle: "italic"
                }}>
                    Webová stránka plná funkcí, které usnadní a zpestří vaše cesty. 
                </Typography>

                {/*Main-header__list*/}
                <Box> 
                    <ListItem sx={{display: "list-item", fontWeight: "700"}} disablePadding> 
                        Možnost sledovat své přátele na živé mapě
                    </ListItem>
                    <ListItem sx={{display: "list-item", fontWeight: "700"}} disablePadding> 
                    <Box component="span" sx={{color: "secondary.main", fontWeight: "700"}}> Zaznamenávej </Box> své trasy a sdílej je s ostatními motorkáři
                    </ListItem>
                    <ListItem sx={{display: "list-item", fontWeight: "700"}} disablePadding> 
                        Přidávej si nové přátele a sdílej své zážitky z cest
                    </ListItem>
                    <ListItem sx={{display: "list-item", fontWeight: "700"}} disablePadding> 
                        Zpestři své cestování na motorkách a <Box component="span" sx={{color: "secondary.main", fontWeight: "700"}}> užij si každou chvilku. </Box>
                    </ListItem>
                </Box>
                
                {/*Main-header__button*/}
                <Button variant="outlined" sx={{
                    border: "1px solid #FFF",
                    color: "primary.light",
                    maxWidth: "227px",
                    width: "100%",
                    borderRadius: "0",
                    transition: "border 0.3s ease-out",
                    "&:hover": {border: "1px solid #FF0000", }
                }}>
                
                <CreateIcon sx={{marginRight:"10px", fontSize:"20px"}} /> 
                ZAREGISTROVAT SE
                </Button>

            </Box>

                
                



        </Box>



    )
}