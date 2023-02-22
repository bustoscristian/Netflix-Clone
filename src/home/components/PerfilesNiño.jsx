import { Box, Grid, Typography } from "@mui/material"
import images from '../../imagenes/images'

const {perfilNiñosFoto} = images;

export const PerfilesNiño = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'black', width:'100%', height:'50%'}}>
        <Grid container sx={{display:'flex', justifyContent:'center', gap:25}}>
            <Grid item sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <img src={perfilNiñosFoto} alt='Perfil niños foto' className="perfilNiñosFoto" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Typography sx={{mb:2}} component='h1' className='h1' variant='inherit'>Crea perfiles para niños</Typography>
                <Typography component='h2' className='h2' variant='inherit'>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</Typography>
            </Grid>
        </Grid>
    </Box>
  )
}
