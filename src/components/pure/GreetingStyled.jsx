import React, { useState } from 'react';

//Definiendo estilos en constantes

//? Estilos cuando el usuario este loggeado
const loggedStyle = {
    color: 'white'
}

//? Estilo para usuario no loggeado
const unloggedStyle = {
    color:'tomato',
    fontWeight: 'bold'
}


const GreetingStyled = (props) => {
    
    //Generamos un estado para el componente y controlar si 
    //el usuario esta logueado o no

    const [logged, setLogged] = useState(false);
    
    //Variables con html
    const greetingUser =()=>(<p>Hola, {props.name}</p>)

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>

            {/* HTML Enbedido en JSX */}
            {logged ? greetingUser(): (<p>Please loggin</p>)}
            <button onClick={()=>{ 
                console.log('Boton pulsado');
                setLogged(!logged);
            } }>
                {logged ? 'Logout' :'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
