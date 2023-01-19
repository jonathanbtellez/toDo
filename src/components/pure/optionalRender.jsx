import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

//? Estilos cuando el usuario este loggeado

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

//? Estilo para usuario no loggeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

// Login / Logout buttons

const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => No se renderiza la expresion


const OptionalRender = () => {

    const [access, setAccess] = useState(false);

    let optinalButton;

    // const updateAccess = ()=>{
    //     setAccess(!access);
    // } 

    // if(access){
    //     optinalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optinalButton = <button onClick={updateAccess}>Login</button>;
    // }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    if (access) {
        optinalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optinalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    const [nMessage, setNMessage] = useState(0);

    // unread message
    const addMessage = () => {
        setNMessage(nMessage + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            {optinalButton}

            {access ? (
                <div>
                    {/* N Messagges unread */ }
                    {nMessage > 0 && nMessage === 1 && <p>You have  {nMessage} new message</p>}
                    {nMessage > 1 && <p>You have  {nMessage} new messages</p>}
                    {nMessage === 0 && <p>There are no new messages</p>}

                    {/* Operador tenario */}
                    <button onClick={addMessage}>
                        {nMessage === 0
                            ? <p>Add your first message</p>
                            : <p>Add new messages</p>}
                    </button>
                </div>
            ):null}
        </div>
    );
}

export default OptionalRender;
