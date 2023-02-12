import { Box, Container, Typography, ListItem, Button, Link, Grid, Paper } from '@mui/material'; 
import { ChangeEventHandler, FC, PropsWithChildren} from "react";

type Props = {
    icon: React.ReactNode;
}

export const BenefitItem : FC<PropsWithChildren<Props>> = (props) => {
    
    const {children, icon} = props;

    return(

        <>
            <Paper elevation={10} 
            sx={{
                display: "flex",
                padding: "20px",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                gap: {
                    xs: "10px",
                    md: "20px"
                },
                border: "2px solid",
                borderImage: "linear-gradient(to right, #f90000, black) 1",
            }}> 
              
                {icon}

                <Box component="p" sx={{
                    fontSize: "20px",
                }}> {children} </Box>

            </Paper> 
        </>
    )

}