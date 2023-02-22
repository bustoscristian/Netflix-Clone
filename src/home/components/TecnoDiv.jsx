import { Box, Grid, Typography } from "@mui/material"
import images from '../../imagenes/images'

const {tecnoImagenes} = images

export const TecnoDiv = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center', backgroundColor:'black', flexDirection:'column', width:'100%', height:'60%'}}>
        <Grid container sx={{display:'flex', justifyContent:'center', flexDirection:'row' ,gap:10}}>
            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Typography sx={{mb:2}} component='h1' className='h1' variant='inherit'>Disfruta donde quieras</Typography>
                <Typography component='h2' className='h2' variant='inherit'>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo adicional.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center'}}>
                <img src={tecnoImagenes} alt='Tecno Imagen' className='tecnoImagen' />
                {/* <video src={strangerThingsMovie} alt='Stranger Movie' className='strangerThingMovie' autoPlay loop muted/> */}
            </Grid>
        </Grid>
    </Box>
  )
}
