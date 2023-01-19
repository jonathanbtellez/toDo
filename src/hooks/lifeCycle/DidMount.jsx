/**
 * Ejemplo de uso del metodo 
 * de ciclo de vida en componente clase y el 
 * hook del ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    

    componentDidMount(){
        console.log('Comportamineto antes de que el componente sea '
        +'anadido al DOM (renderize)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

 export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamineto antes de que el componente sea '
        +'anadido al DOM (renderize)')

    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}




