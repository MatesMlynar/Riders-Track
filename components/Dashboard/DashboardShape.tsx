import {Box} from '@mui/material'; 
import { ChangeEventHandler, FC} from "react";

export const DashboardShape : FC<{}> = () => {

    return(

        <Box
            component="img"
            alt="Logo dashboard stránky"
            sx ={{
                maxHeight: "100%",
            }}
            src="/images/background/DashboardShape.png"
        />

    )

}