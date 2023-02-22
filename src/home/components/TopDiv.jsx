import { Grid } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import images from '../../imagenes/images'
import '../../index.css'

const {netflixLogo} = images

export const TopDiv = () => {
  
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/login')
  }

  return (
      <Grid container sx={{height:'10%', display:'flex', justifyContent:'center'}}>
        <Grid item xs={8} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <img src={netflixLogo} alt="Netflix Logo" className='logo'/>
          <button className='button' onClick={onLogin}>Iniciar sesión</button>
        </Grid>
      </Grid>
  )
}
