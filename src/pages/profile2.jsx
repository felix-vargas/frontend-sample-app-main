import React from 'react'
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoUSM from '../assets/usm.png'

import NavBar from '../components/nav_bar'
import '../stylesheets/profile.css'
import pic from '../assets/elsa.jpeg'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ArticleIcon from '@mui/icons-material/Article';



function AlertDialog(id) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={() => onRemove(id)} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }




const item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}



const initialList = [
    {
      id: 'a',
      firstname: 'IWI131',
      lastname: ' Programación',
      year: ' Aceptada',
    },
    {
      id: 'b',
      firstname: 'IWI131',
      lastname: ' Programación',
      year: ' Aceptada',
    },
  ];
  
  
  
  const listReducer = (state, action) => {
    switch (action.type) {
      case 'REMOVE_ITEM':
        return {
          ...state,
          list: state.list.filter((item) => item.id !== action.id),
        };
      default:
        throw new Error();
    }
  };
  
  const App = () => {
    const [listData, dispatchListData] = React.useReducer(listReducer, {
      list: initialList,
      isShowList: true,
    });
  
    function handleRemove(id) {
      dispatchListData({ type: 'REMOVE_ITEM', id });
    }
  
    if (!listData.isShowList) {
      return null;
    }
  
    return <List list={listData.list} onRemove={handleRemove} />;
  };
  
  const List = ({ list, onRemove }) => (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
  
  const Item = ({ item, onRemove }) => (
    <li>
      <span>{item.firstname}</span>
      <span>{item.lastname}</span>
      <span>{item.year}</span>
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
      <div>
        {<AlertDialog/>}
        </div>
      
    </li>
  );




export const ProfilePage = () => {

  return (
    <div className='page' id='wrapper' >

      <div className='header img'>
        <img src={LogoUSM} alt='logo usm' />
      </div>
      <NavBar />
      <h1 className='page__title'>Mi Perfil</h1>
      
      
    
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
        <div id='ayudantias'>
            <h2 >Mis Ayudantías</h2>
            {allStorage}

            {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
            )}
            <div>
                  {<App />}
                </div>

        
            <Button variant='contained' sx={{ width: 345 }}>Postular</Button>
            
        </div>
        <div id='profile' >
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item2 xs={3}>
                <img src={pic} id='pic' height={200} width={200} alt='foto'/><img />
                </Grid>
                <Grid item2 xs={9}>
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

