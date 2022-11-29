import React from 'react'
import { Button , CardActionArea, CardActions} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'
/*Imágenes*/
import LogoProgramacion from '../assets/Programación.png'
import Labimg from '../assets/ranking_investigacion.jpg'
import Catedraimg from '../assets/grview-79076-1.jpg'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import {Breadcrumbs} from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
};


export const RamoPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <div className='page'>
                <div className='header img'>
                    <Link to="/">
                        <img src={LogoUSM} alt='logo usm' className='imageLink'/>
                    </Link>
                </div>
      <NavBar />
      <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        to ="/"
                        color="inherit"
                    >
                        Inicio
                    </Link>
                    <Link
                        to ="/postulacion"
                        color="inherit"
                    >
                        Postulaciones
                    </Link>
                    <Typography color="textPrimary">
                        IWI-131-Programacion
                    </Typography>
        </Breadcrumbs>
      <h1>IWI - 131 Programación</h1>

      <div className='float-container'>        
        <div className='float-child'>
            <img src={LogoProgramacion} alt='logo usm' />
            
        </div>
        
      </div>
      <div className='float-container'>
            <div className='float-child'>
                <Card sx={{ width: 400 }}>
                    <CardMedia
                    component="img"
                    height="150"
                    image={Labimg}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Ayudantía Laboratorio
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    <ul>
                        Prerequisitos: 
                        <li>Haber aprobado IWI-131</li>
                        <li>Curso avanzado</li>
                        Horarios: 
                        <li>Lunes 5-6 / Sala F-401</li>
                        Remuneración: 
                        <li>$40.000/mes</li>
                        </ul>
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} size="large" color="primary">
                    Postular
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Postulación realizada exitosamente
                            </Typography>
                            <Typography id ="modal-modal-description" sx={{ ml:'40%'}}>
                                <CheckCircleOutlineIcon sx={{ width: '40%', height: '40%'}}/>
                            </Typography>
                        </Box>
                    </Modal>
                </CardActions>
                </Card>
            </div>
            <div className='float-child'>
                <Card sx={{ width: 400 }}>
                    <CardMedia
                    component="img"
                    height="150"
                    image={Catedraimg}
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ayudantía Catedra
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            <ul>
                            Prerequisitos: 
                            <li>Haber aprobado IWI-131</li>
                            <li>Curso de ayudante avanzado</li>
                            <li>Curso avanzado</li>
                            Horarios: 
                            <li>Lunes 5-6 / Sala F-401</li>
                            Remuneración: 
                            <li>$60.000/mes</li>
                            </ul>
                        </Typography>
                    </CardContent>
                <CardActions>
                    <Button size="large" color="primary" onClick={handleOpen}>
                        Postular
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Postulación realizada exitosamente
                            </Typography>
                            <Typography id ="modal-modal-description" sx={{ ml:'40%'}}>
                                <CheckCircleOutlineIcon sx={{ width: '40%', height: '40%'}}/>
                            </Typography>
                        </Box>
                    </Modal>
                </CardActions>
                </Card>
            </div>

      </div>
        <Link to="/postulacion">
                <Button>VOLVER</Button>
        </Link>
    </div>
  )
}

export default RamoPage
