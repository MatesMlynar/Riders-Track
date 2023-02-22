import { DashboardNavigation } from "@/components/dashboardNavigation";
import { DashboardShape } from "@/components/DashboardShape";
import {Box} from '@mui/material'; 
import {NextPage} from "next";





const dashboard : NextPage = () => {
    return(
        <>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", height: "100%"}}>

                {/*Dashboard -- left side (navigation)*/}
                <DashboardNavigation/>


                {/*Dashboard -- middle (content)*/}


                {/*Dashboard -- right side (shape)*/}
                <DashboardShape/>

            </Box>

        </>
    )
}

export default dashboard;