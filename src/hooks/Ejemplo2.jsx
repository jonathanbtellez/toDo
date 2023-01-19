/**
 * Ejemplo de uso de:
 * - useState()
 * -useRef()
 * -useEffect()
*/

import { useEffect, useRef, useState } from "react";
import React from 'react';

const Ejemplo2 = () => {
    
    //Vamos a crear dos contadores distintos
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
   
    const [contador2, setContador2] = useState(0);
    
    //Vamos a crear una referencia con useRef()
    //Con un elemento del Dom del componente (Vista HTML)

    const miRef = useRef();

    const incrementar1 = () => {
        setContador1(contador1 +1);
    }

    const incrementar2 = () => {    
        setContador2(contador2 +1);
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el stado del componente
     * se ejecuta aquello que esta dentro del useEffect()
     */
    
    //Caso mas sencillo del useEffect()
    /*useEffect(() => {
        console.log('CAMIBO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostranso referencia al elemento del DOM')
        console.log(miRef)       
    });*/

    /**
     * ? Caso 2 Ejecutar solo cuando cambie el contador1
     * Cada vez que haya un cambio en el contador1, se ejecutara lo que dice en el useEffect()
     * En caso de que cambie contador dos no habra ejecucion
     */


    //solo se puede hacer uso de un useEffect();
    /*useEffect(() => {
        console.log('CAMIBO EN EL ESTADO DEL CONTADOR1');
        console.log('Mostranso referencia al elemento del DOM')
        console.log(miRef) 
    }, [contador1]);*/

    /**
     * ? Caso 3 Ejecutar solo cuando cambie el contador1 o contador2
     * Cada vez que haya un cambio en el contador1, se ejecutara lo que dice en el useEffect()
     * Cada vez que haya un cambio en el contador2, se ejecutara lo que dice en el useEffect()
     */

    //Solo se ejecutara cuando un  elemeto es la lista del ultimo parametro haga un combio en es estado
    useEffect(() => {
        console.log('CAMIBO EN EL ESTADO DEL CONTADOR1 / CONTADOR2');
        console.log('Mostranso referencia al elemento del DOM')
        console.log(miRef) 
    }, [contador1,contador2]);


    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>

            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>incrementar contador 1</button>
                <button onClick={incrementar2}>incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
