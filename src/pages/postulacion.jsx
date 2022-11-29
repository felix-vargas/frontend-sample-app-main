import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react';
import LogoUSM from '../assets/usm.png'
import { Link } from 'react-router-dom';
/*Imágenes*/
import LogoProgramacion from '../assets/Programación.png'
import LogoLenguajes from '../assets/Lenguajes de Programación.png'
import LogoEstructura from '../assets/Estructura de Datos.png'
import LogoEstaca from '../assets/Estaca.png'
import LogoBD from '../assets/Bases de Datos.png'
/*Imágenes*/

import NavBar from '../components/nav_bar'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Breadcrumbs, Typography} from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';


const asignaturasInformatica = [
    { label: 'IWI-131: Programación'},
    { label: 'INF-134: Estructuras de Datos'},
    { label: 'INF-253: Lenguajes de Programación'},
    { label: 'INF-239: Bases de Datos'},
    { label: 'INF-280: Estadística Computacional'},
];
  





export const Postulacion = () => {
  const [alignment, setAlignment] = React.useState('web');
  const [isShownName, setIsShownName] = useState(true);
  const [isShown, setIsShown] = useState(false);
    const handleClickSelect = event => {
      setIsShown(current => true);
      setIsShownName(current => false);
    };
    const handleClickName = event => {
      setIsShownName(current => true);
      setIsShown(current => false);
    };

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    return (
        <section>
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
                    <Typography color="textPrimary">
                        Postulaciones
                    </Typography>
                </Breadcrumbs>

                <h1 className='page__title'>Postulaciones</h1>


                <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform">
                <ToggleButton onClick={handleClickName}>Búsqueda por Nombre</ToggleButton>
                <ToggleButton onClick={handleClickSelect}>Búsqueda por Selección</ToggleButton>
                </ToggleButtonGroup>
                <div>
                  {isShownName && <NameBox />}
                </div>
                <div>
                  {isShown && <SelectBox />}
                </div>
            </div>
        </section>
    )
  }

  function SelectBox() {
    return (
      <div>
        <h4>Búsqueda por selección</h4>
          <Button component={Link} to="/ramo"><img src={LogoProgramacion} height={100} alt='1' /><br /></Button>
          <Button component={Link} to="/ramolp"><img src={LogoLenguajes} height={100} alt='1' /><br /></Button>
          <Button component={Link} to="/ramoedd"><img src={LogoEstructura} height={100} alt='1' /><br /></Button>
          <Button component={Link} to="/ramoestaca"><img src={LogoEstaca} height={100} alt='1' /><br /></Button>
          <Button component={Link} to="/ramobdd"><img src={LogoBD} height={100} alt='1' /><br /></Button>
      </div>
    );
  }

  function NameBox() {
    const [selected, setSelected] = useState( { label: "" });
    const handleChange2 = (e,v) => setSelected(v);
    console.log(selected)
    const paginas = {
         'IWI-131: Programación': 'ramo',
         'INF-134: Estructuras de Datos': 'ramoedd',
         'INF-253: Lenguajes de Programación': 'ramolp',
         'INF-239: Bases de Datos':'ramobdd',
         'INF-280: Estadística Computacional': 'ramoestaca',
         '':'postulacion'
    }
    return (
      <div>
        <h4>Búsqueda por nombre</h4>
          <Autocomplete
          disablePortal
          options = {asignaturasInformatica}
          value={selected}
          onChange={handleChange2}
          id="combo-box-demo"
          sx={{ width: 350 }}
          renderInput={(params) => <TextField {...params} label="Asignaturas" />}/>
          <Button component={Link} to={ `/${paginas[selected.label]}` }>Postular</Button>
      </div>
    );
  }

export default Postulacion