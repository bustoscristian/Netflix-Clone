import { Box, Grid, Typography } from "@mui/material"

export const PreguntasDiv = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'black', width:'100%', height:'50%'}}>
        <Grid container sx={{display:'flex', justifyContent:'center'}}>
            <Grid item sx={{display:'flex', flexDirection:'column', mt:5}}>
                <Typography component='h1' className='h1' variant='inherit'>Preguntas Frecuentes</Typography>
            </Grid>
            <Grid item sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                
            </Grid>
        </Grid>
    </Box>
  )
}
