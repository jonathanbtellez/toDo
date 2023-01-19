/**
 * Ejemplo para entender el uso de
 * Props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>**** Ejemplo uso Props.children ****</h1>
            <h2>Nombre: { props.nombre }</h2>
            {/* props.children renderizara por defecto a quello que se encuentre 
            entre las etiquetas que se encuentren entre las etiquetas de apertura y cierre de este componente 
            desde el componente de orden superior*/}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
