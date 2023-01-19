/**
 * Ejemplo Hooks:
 * useState()
 * useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Component 1
 * dispone de un context que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {

    //Iniciamos un estado que va a llenarse 
    const state = useContext(miContexto)
    
    //con los datos del contexto del padre

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintando o renderizando el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    
    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}

const MiComponentConContexto = () => {
    
    const estadoinicial = {
        token: 'JWT'+12345,
        sesion: 1
    }
    
    //Creamos el estado del componente
    const [sesionData, setSesionData] = useState(estadoinicial);

    const actualizarSesion =()=>{
        setSesionData({
            token:'JWT'+ Math.floor(Math.random()*100000),
            sesion: sesionData.sesion +1
        })
    }

    return (
        <div>
            <miContexto.Provider value={sesionData}>
                {/* Tdodo lo que esta aqui adentro puede leer los datos de sesionData */}
                {/* Ademas si se actualizan los componentes de aqui tambien lo actualiza */}
                <h1>*** Ejemplo de useState(), miContexto() ***</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar sesion</button>
            </miContexto.Provider>
        </div>
    );
}

export default MiComponentConContexto;


