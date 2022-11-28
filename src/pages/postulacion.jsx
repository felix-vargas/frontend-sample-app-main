import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react';

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

const asignaturasInformatica = [
    { label: 'IWI-131: Programación'},
    { label: 'INF-134: Estructuras de Datos'},
    { label: 'INF-253: Lenguajes de Programación'},
    { label: 'INF-239: Bases de Datos'},
    { label: 'INF-236: Análisis y Diseño de Software'},
    { label: 'INF-225: Ingeniería de Software'},
    { label: 'INF-322: Diseño de Interfaces Usuarias'},
    { label: 'INF-245: Arquitectura dy Organización de Computadores'},
    { label: 'INF-246: Sistemas Operativos'},
    { label: 'INF-256: Redes de Computadores'},
    { label: 'INF-343: Sistemas Distribuidos'},
];
  
export const Postulacion = () => {
    const [alignment, setAlignment] = React.useState('web');
    const [isShown, setIsShown] = useState(false);
    const [isShownName, setIsShownName] = useState(false);
    const handleClickSelect = event => {
      setIsShown(current => !current);
    };
    const handleClickName = event => {
      setIsShownName(current => !current);
    };
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    return (
        <section>
            <div className='page'>
                <h1 className='page__title'>Postulaciones</h1>
                <NavBar />
                <h2>Postulaciones</h2>
                <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform">
                <ToggleButton onClick={handleClickName}>Búsqueda por Nombre</ToggleButton>
                <ToggleButton onClick={handleClickSelect}>Búsqueda por Selección</ToggleButton>
                </ToggleButtonGroup>
                
            </div>
            <div>
              {isShownName && <NameBox />}
            </div>
            <div>
              {isShown && <SelectBox />}
            </div>
        </section>
        
    )
  }

  function SelectBox() {
    return (
      <div className='page'>
        <h4>Búsqueda por selección</h4>
          <Button><img src={LogoProgramacion} height={100} alt='1' /><br /></Button>
          <Button><img src={LogoLenguajes} height={100} alt='1' /><br /></Button>
          <Button><img src={LogoEstructura} height={100} alt='1' /><br /></Button>
          <Button><img src={LogoEstaca} height={100} alt='1' /><br /></Button>
          <Button><img src={LogoBD} height={100} alt='1' /><br /></Button>
      </div>
    );
  }

  function NameBox() {
    return (
      <div className='page'>
        <h4>Búsqueda por nombre</h4>
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={asignaturasInformatica}
          sx={{ width: 350 }}
          renderInput={(params) => <TextField {...params} label="Asignaturas" />}/>
      </div>
    );
  }

export default Postulacion