

import React from 'react'
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import NavBar from '../components/nav_bar'
import '/Users/anyi/Documents/GitHub/frontend-sample-app-main/src/stylesheets/profile.css'
import pic from '../assets/elsa.jpeg'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ArticleIcon from '@mui/icons-material/Article';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ProfilePage = () => {

  return (
    <div className='page' id='wrapper' >

      <h1 className='page__title'>Mi Perfil</h1>
      <NavBar />
      
      
    
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
        <div id='ayudantias'>
            <h2 >Mis Ayudantías</h2>

        
            <Accordion sx={{ maxWidth: 345 }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>IWI-131</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Estado = Aceptada
                    Ayudantía de Computación Científica
                    Viernes 5-6
                    Sala B012
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ maxWidth: 345 }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>INF-280</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Estado = Aceptada
                    Ayudantía de Computación Científica
                    Viernes 5-6
                    Sala B012
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Button variant='contained' sx={{ width: 345 }}>Postular</Button>
            
        </div>
        <div id='profile' >
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <img src={pic} id='pic' height={200} width={200} alt='foto'/><img />
                </Grid>
                <Grid item xs={9}>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        
                        <Typography variant="h5" component="div">
                        Elsa Polindo
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Ayudante
                        </Typography>
                        <Typography variant="body2">
                        Estudiante de 2º año de Ingeniería Comercial
                        <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Currículum</Button>
                    </CardActions>
                    </Card>
                
                </Grid>
            </Grid>
            </Box>
            
        </div>
        </CardContent>
        </Card>
    </div>
  );
}

export default ProfilePage

