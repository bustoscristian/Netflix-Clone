import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'black', width:'100%', height:'50%', alignItems:'center', flexDirection:'column'}}>
       
       <Grid container sx={{display:'flex', flexDirection:'row', alignItems:'center', width:'60%', mb:2}}>
            <Typography component='h1' className='h1_frecuentes' variant='inherit'>¿Preguntas? Llama al 0800 345 1593</Typography>
        </Grid>

        <Grid container sx={{display:'flex', justifyContent:'center', flexDirection:'row', width:'60%'}}>
            <Grid item xs={4} sx={{display:'flex', flexDirection:'column'}}>
                <Link href="#" color='inherit' className='link'>Preguntas Frecuentes</Link>
                <Link href="#" color='inherit' className='link'>Cuenta</Link>
                <Link href="#" color='inherit' className='link'>Empleo</Link>
                <Link href="#" color='inherit' className='link'>Privacidad</Link>
                <Link href="#" color='inherit' className='link'>Contáctanos</Link>
                <Link href="#" color='inherit' className='link'>Solo en Netflix</Link>
            </Grid>
            <Grid item xs={4} sx={{display:'flex', flexDirection:'column'}}>
                <Link href="#" color='inherit' className='link'>Términos de las tarjetas de regalo</Link>
                <Link href="#" color='inherit' className='link'>Prensa</Link>
                <Link href="#" color='inherit' className='link'>Formas de ver</Link>
                <Link href="#" color='inherit' className='link'>Preferencias de cookies</Link>
                <Link href="#" color='inherit' className='link'>Prueba de velocidad</Link>
            </Grid>
            <Grid item xs={4} sx={{display:'flex', flexDirection:'column'}}>
                <Link href="#" color='inherit' className='link'>Centro de ayuda</Link>
                <Link href="#" color='inherit' className='link'>Relaciones con inversionistas</Link>
                <Link href="#" color='inherit' className='link'>Términos de uso</Link>
                <Link href="#" color='inherit' className='link'>Información corporativa</Link>
                <Link href="#" color='inherit' className='link'>Avisos legales</Link>
            </Grid>
        </Grid>
    </Box>
  )
}
