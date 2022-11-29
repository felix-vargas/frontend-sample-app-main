import React from 'react'
import LogoUSM from '../assets/usm.png'
import NavBar from '../components/nav_bar'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import USMMAR from '../assets/usmmar.jpg'
import {Link}  from 'react-router-dom';
import {Breadcrumbs} from '@mui/material';


const images = [
    {
      url: USMMAR,
      title: 'Ver las ayudantías disponibles',
      width: '100%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.5,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.2,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

export const HomePage = () => {
  return (
    <div className='page'>
                <div className='header img'>
                    <Link to="/">
                        <img src={LogoUSM} alt='logo usm' className='imageLink'/>
                    </Link>
                </div>
      <NavBar />
      <Breadcrumbs aria-label="breadcrumb">

                    <Typography color="textPrimary">
                        Inicio
                    </Typography>
        </Breadcrumbs>
      <h2>Portal de Postulaciones USM DI</h2>
      <Link to="/postulacion">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (

        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          
        >
            
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </Link>
    Bienvenido al portal de postualciones para ayudantías del Departamento de Informática. Conoce las ayudantías disponibles y sus prerequisitos para Postular
    , en caso de haberte arrepentido de cualquier postulación siempre puedes cancelar una postulación en tu perfil mientras esta no haya sido aceptada aún.
    </div>
  )
}

export default HomePage
