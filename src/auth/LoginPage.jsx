import { Box, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material"
import images from '../imagenes/images'

const {netflixLogo} = images

export const LoginPage = () => {
  return (
    
    <Box className='fondo' sx={{height: '100%', width:'100%'}}>
      <Grid container sx={{display:'flex', justifyContent:'center'}}>

        <Grid item xs={12}>
          <img src={netflixLogo} alt="Netflix Logo" className='logo'/>
        </Grid>

        <Grid item xs={3} className="rectangulo" sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'center'}}>
          
          <Grid item xs={12} sx={{display:'flex', flexDirection:'column', padding:8}}>
            <Typography component='h1' className="h1_tituloLogin" variant="inherit" sx={{mb:3}}>Inicia sesión</Typography>
            
            <TextField className="btnLogin" id="filled-multiline-flexible" label="Email o número de teléfono" multiline maxRows={4} variant="filled" sx={{background:'#333333', mb:2, height:'55px'}} />
            <TextField className="btnLogin" id="filled-multiline-flexible" label="Contraseña" multiline maxRows={4} variant="filled" sx={{background:'#333333', mb:2, height:'55px'}} />
            
            <button className="btnLogin">Iniciar sesión</button>
            <Grid item sx={{display:'flex',justifyContent:'space-between', width:'90%', alignItems:'center'}}>
              <FormControlLabel  xs={4} control={<Checkbox  sx={{color:'gray','&.Mui-checked': {color:'#E50914'}}} />} label="Recuérdame" sx={{color:'#b3b3b3'}}/>
              <Link href="#" xs={4} sx={{color:'#b3b3b3'}}>¿Necesitas ayuda?</Link>
            </Grid>
            
            <Grid item sx={{display:'flex', width:'100%', mt:8, gap:1, alignItems:'center'}}>
              <Typography xs={4} sx={{color:'#b3b3b3'}} component='p' className="p_login1" variant="inherit">¿Primera vez en Netflix?</Typography>
              <Link xs={4} href="#" className="p_login2" sx={{color:'white'}}>Suscríbete ahora.</Link>
            </Grid>

            <Grid item sx={{display:'flex', width:'93%', mt:1}}>
              <Typography xs={4} sx={{color:'#b3b3b3'}} component='p' className="p_login3" variant="inherit">Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.<Link href="#">Más info.</Link></Typography>
            </Grid>
            
          </Grid>

        </Grid>

      </Grid>
    </Box>

  )
}
