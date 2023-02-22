import { Box, Grid } from "@mui/material"
import {PublicLayout} from "../layouts/PublicLayout"
import { useNavigate } from "react-router-dom"
import images from '../imagenes/images'
import { AppRouter } from "../router/AppRouter"

const {netflixLogo} = images

export const LoginPage = () => {
  return (
    
    <h1>ola</h1>
    
    // <PublicLayout>
    //    <Box className='fondo' sx={{height: '100%', backgroundColor:'red', width:'100%'}}>
    //      <Grid container sx={{height:'100%', display:'flex', justifyContent:'center'}}>
    //         <Grid item xs={8} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    //           <img src={netflixLogo} alt="Netflix Logo" className='logo'/>
    //           <h1>ESTAS EN EL LOGIN</h1>
    //         </Grid>
    //       </Grid>
    //    </Box>
    // </PublicLayout>
  )
}
