import { MidDiv } from './components/MidDiv'
import { TopDiv } from './components/TopDiv'
import '../../src/index.css'
import { PublicLayout } from '../layouts/PublicLayout'
import { Box } from '@mui/material'
import { TvDiv } from './components/TvDiv'
import { DownloadDiv } from './components/DownloadDiv'
import { TecnoDiv } from './components/TecnoDiv'
import { PerfilesNiño } from './components/PerfilesNiño'
import { PreguntasDiv } from './components/PreguntasDiv'
import { Footer } from '../shared/Footer'

export const NetflixHome = () => {

  return (
    <PublicLayout>
      <Box className='fondo' sx={{height: '100%', backgroundColor:'red', width:'100%', }}>
        <TopDiv />
        <MidDiv />
        <div className='espacio'></div>
        <TvDiv />
        <div className='espacio'></div>
        <DownloadDiv />
        <div className='espacio'></div>
        <TecnoDiv />
        <div className='espacio'></div>
        <PerfilesNiño />
        <div className='espacio'></div>
        <PreguntasDiv />
        <div className='espacio'></div>
        <Footer />
      </Box>
    </PublicLayout>
    
  )
}
