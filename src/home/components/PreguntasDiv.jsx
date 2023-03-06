import { Box, Grid, Typography , Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { Footer } from "../../shared/Footer";



export const PreguntasDiv = () => {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
  return (

    <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'black', width:'100%', height:'120%', flexDirection:'column', alignItems:'center'}}>
        <Grid container sx={{display:'flex', justifyContent:'center', flexDirection:'column', width:'60%'}}>
            <Grid item sx={{display:'flex', flexDirection:'column', mt:5, mb:3}}>
                <Typography component='h1' className='h1_preguntas' variant='inherit'>Preguntas Frecuentes</Typography>
            </Grid>
            <Grid item sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Accordion sx={{mb:1}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<AddIcon fontSize="large" sx={{color:'white'}} />} sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='h1' className='h1_accordion' variant='inherit'>¿Qué es Netflix?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='p' className='p_accordion' variant='inherit' sx={{mb:2}}>
                  Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
                  </Typography>
                  <Typography component='p' className='p_accordion' variant='inherit'>
                  Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{mb:1}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<AddIcon fontSize="large" sx={{color:'white'}} />} sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='h1' className='h1_accordion' variant='inherit'>¿Cuánto cuesta Netflix?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='p' className='p_accordion' variant='inherit'>
                  Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 699 hasta $ 1.899 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{mb:1}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<AddIcon fontSize="large" sx={{color:'white'}}/>} sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='h1' className='h1_accordion' variant='inherit'>¿Dónde puedo ver Netflix?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='p' className='p_accordion' variant='inherit' sx={{mb:2}}>
                  Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.
                  </Typography>
                  <Typography component='p' className='p_accordion' variant='inherit'>
                  Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{mb:1}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<AddIcon fontSize="large" sx={{color:'white'}} />} sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='h1' className='h1_accordion' variant='inherit'>¿Cómo cancelo?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='p' className='p_accordion' variant='inherit'>
                  Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{mb:1}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<AddIcon fontSize="large" sx={{color:'white'}}/>} sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='h1' className='h1_accordion' variant='inherit'>¿Qué puedo ver en Netflix?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='p' className='p_accordion' variant='inherit'>
                  Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{mb:1}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary expandIcon={<AddIcon fontSize="large" sx={{color:'white'}}/>} sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='h1' className='h1_accordion' variant='inherit'>¿Es bueno Netflix para los niños?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:'#303030', color:'white'}}>
                  <Typography component='p' className='p_accordion' variant='inherit' sx={{mb:2}}>
                  La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.
                  </Typography>
                  <Typography component='p' className='p_accordion' variant='inherit'>
                  Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
        </Grid>
        <Grid container sx={{display:'flex', justifyContent:'center', flexDirection:'column', width:'100%', alignItems:'center', mt:5}}>
          <Grid item sx={{display:'flex', flexDirection:'column', justifyContent:'center', mb:3}}>
            <Typography component='p' className='p' variant='inherit'>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
            </Typography>
         </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', gap:1}}>
            <input type='text' placeholder='Email' className='textField' />
            <button className='btnComenzar'> Comenzar › </button>
          </Grid>

        </Grid>
    </Box>
  )
}
