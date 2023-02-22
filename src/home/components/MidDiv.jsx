import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/material"

export const MidDiv = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', width:'100%', height:'90%'}}>
      <Box sx={{mb: 5}}>
        <Typography sx={{textAlign:'center', mb:2}} component='h1' className="h1" variant="inherit">Peliculas y series ilimitadas y mucho más</Typography>  
        <Typography sx={{textAlign:'center', mb:2}} component='h2' className="h2" variant="inherit">Disfruta donde quieras. Cancela cuando quieras.</Typography>
        <Typography sx={{textAlign:'center'}} component='p' className="p" variant="inherit">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</Typography>
      </Box>

        <Grid container sx={{display:'flex', justifyContent:'center'}}>
          <Grid item xs={12} sm={6} md={4} sx={{display:'flex', gap:1}}>
            <input type='text' placeholder='Email' className='textField' />
            <button className='btnComenzar'> Comenzar › </button>
          </Grid>
        </Grid>
    </Box>
  )
}
