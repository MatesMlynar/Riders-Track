import { DashboardNavigation } from "@/components/Dashboard/dashboardNavigation";
import { DashboardShape } from "@/components/Dashboard/DashboardShape";
import { DashboardContent } from "@/components/Dashboard/DashboardContent";
import {Box} from '@mui/material'; 
import {NextPage} from "next";





const dashboard : NextPage = () => {
    return(
        <>
            <Box sx={{
                display: "flex", 
                justifyContent: "space-between", 
                width: "100%", 
                height: "100%",
                backgroundColor: "#F9F6F6"
            }}>

                {/*Dashboard -- left side (navigation)*/}
                <DashboardNavigation/>


                {/*Dashboard -- middle (content)*/}
                <Box sx={{flexGrow: "1"}}> 
                    <DashboardContent></DashboardContent>
                </Box>

                {/*Dashboard -- right side (shape)*/}
                <DashboardShape/>

            </Box>

        </>
    )
}

export default dashboard;