/**
 * Ejemplo de componente tipo clase que dispone de los 
 * metodos del ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {
    
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Cuando el montaje fue mostado pero no ha sido renderizado')
    }

    shouldComponentUpdate(){
        /**
         * Controla si el componente debe o no ser actualizado
         */
        //return boolean
    }
    
    componentDidUpdate(){
        console.log('DIDUPDATE: Cuando se renderiza la vista')
    }

    componentWillUnmount(){
        console.log('WILLUNMOUNT: antes de desaparecer el componente')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;

