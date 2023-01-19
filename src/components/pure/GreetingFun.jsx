import React,{useState} from 'react';
//La funcion useState nom permite crear un estado en nuestro comp funcional

import PropTypes from 'prop-types';

//Vreando un componente funcional
const GreetingFun = (props) => {

    //Usando useStage
    //[variable, metodo para actualizar] = valor inicial
    const [age, setage] = useState(29);

    const birthday =()=>{
        //Metodo que actualiza la edad
        setage(age +1);
    }

    return (
        <div>
            {/*Los props son informacion recibida por el componente*/}
            <h1>Hola {props.name} desde un componente funcional!!</h1>
            {/* El stage son propiedades privadas del componente*/}
            <h2>Tu edad es: {age} años</h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingFun.propTypes = {
    name: PropTypes.string
};


export default GreetingFun;
