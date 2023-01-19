/** Ejemplo de uso del Hook useState 
 * 
 * Crear componente de tipo funcional y acceder asu estado
 * privado atraves de un hook y ademas poder modificarlos
*/
import React from 'react';
import { useState } from 'react';


const Ejemplo1 = () => {
    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre:"Jonathan",
        email: "jonatan@correo.com"
    }

    /**
     * Queremos que el valor inical y persona inicial sean parte del
     * Estado del componente para asi gestionar su cambio y
     * reflejar su cambio en la vista del Doc
     * 
     * const [nombreVariable, funcionVariableble] =useState(valorInicial);
     */

    const [contador, setContador] = useState(valorInicial);

    const [persona, setPersona] = useState(personaInicial);
    
    /**
     * Funcion para actualizar el estado privado que conmtiene el contador
     */
    
    const incrementarContador=()=>{
        //? FuncionParaCambiar(nuevoValor)
        setContador(contador+1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    const actualizarPersona=()=>{
        setPersona({
            nombre:'Pepe',
            email:'PepeCo@Correo.com'
        })
    }
    return (
        <div>
            <h1>*** Ejemplo de useState ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado*/}
            <div>
                <button onClick={incrementarContador}>incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
            </div>
        </div>
    );
};


export default Ejemplo1;
