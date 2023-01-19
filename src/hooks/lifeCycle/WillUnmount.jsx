/**
 * Ejemplo de uso del metodo ComponentWillUnmount para componente clase
 * Ejemplo de uso de hooks para componente funcional
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento andes de que el componente desaparesca');
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        )
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return console.log('Comportamiento andes de que el componente desaparesca');
    },[]);

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    );
}


