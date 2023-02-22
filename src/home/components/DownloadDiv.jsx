import { Box, Grid, Typography } from "@mui/material"
import images from '../../imagenes/images'

const {strangerThings,boxStrangerThings} = images;

export const DownloadDiv = () => {
  return (
    <Box sx={{justifyContent:'center', flexDirection:'column', backgroundColor:'black', width:'100%', height:'50%'}}>
        <Grid container sx={{display:'flex', justifyContent:'center', gap:25}}>
            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Box sx={{position:'relative'}}>
                    <img src={strangerThings} alt='Stranger Things Movil' className="strangerThingMobil"/>
                    <Box sx={{display:'flex',position:'absolute', flexDirection:'row', gap:3}} className='rectanguloStrangerThings'>
                        <img src={boxStrangerThings} alt='Stranger box image' className="strangerBox"/>
                        <Grid item sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <Typography component="h1" className="strangerTitulo" variant="inherit">Stranger Things</Typography>
                            <Typography component="p" className="strangerLoading" variant="inherit">Descargando...</Typography>
                        </Grid>
                        <Grid item sx={{display:'flex', justifyContent:'space-between', mt:4, ml:2}}>
                            <span className="loader"></span>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', flexDirection:'column', justifyContent:'center' }}>
                <Typography sx={{mb:2}} component='h1' className="h1" variant="inherit">Descarga tus series para verlas offline</Typography>
                <Typography  component='h2' className="h2" variant="inherit">Guarda tu contenido favorito y tendrás siempre algo para ver.</Typography>
            </Grid>
        </Grid>
    </Box>
  )
}
