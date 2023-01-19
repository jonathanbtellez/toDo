/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    
    /*Lo componentes con clases pueden tener componentes y parametros*/ 
    /*En este caso el parametro props puede ser cualquier elemento html*/ 
    constructor(props){
        super(props);
        this.state = {
            age: 26
        };
    }

    render() {
        return (
            <div>
                {/*Los props son informacion recibida por el componente*/}
                <h1>Hola {this.props.name} !!</h1>
                {/*El stage son propiedades privadas del componente*/}
                <h2>Tu edad es: {this.state.age} años</h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        {/*El uso del metodo set state es la unica manera de actualizar los
        datos del state al renderizar*/}
        this.setState(prevstate=>{
            return{   
               age: prevstate.age +1
            }
        })     
    }
}


Greeting.propTypes = {
    //Nos permite definir comportamientos para garantizar que se reciban el tipo de datos deseado
    name: PropTypes.string,
};


export default Greeting;
