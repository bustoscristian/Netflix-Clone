import { Box, Grid, Typography } from "@mui/material"
import images from "../../imagenes/images"

const {tvDiv, you, wendsday} = images;

export const TvDiv = () => {
  return (
    <Box sx={{justifyContent:'center', flexDirection:'column', backgroundColor:'black', width:'100%', height:'50%'}}>
        <Grid container sx={{display:'flex', justifyContent:'center', gap:20}}>
            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Typography sx={{mb:2}} component='h1' className="h1" variant="inherit">Disfruta en tu TV</Typography>
                <Typography component='h2' className="h2" variant="inherit">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{justifyContent:'center'}}>
                <img src={tvDiv} alt="tvDiv Foto" className="tvFoto"/>
                <img src={you} alt="you foto" className="youFoto"/>
                {/* <img src={wendsday} alt="wendsday foto" className="wendsdayFoto"/> */}
            </Grid>
        </Grid >
    </Box>
  )
}
