import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const Child = ({ name, send, update }) => {

    const messageRef = useRef('');

    const nameRef = useRef('');

    const pressButton = () => {
        const text = messageRef.current.value;
        alert(`Text in Input ${text}`);
    }

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`);
    }

    const submitName=(e)=>{
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background: 'darkRed', color: 'white', padding:'30px'}}>
            <p onMouseOver={() => console.log('Mouse over event')}>Child component</p>
            <p>Hola {name}</p>
            <button onClick={() => console.log('Pressed Button 1')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            {/* We can´t use params in a function directly */}
            {/* becuase execute the function with out press the button */}
            {/* <button onClick={pressButtonParams('Hello')}>
                Button 3
            </button> */}

            {/* Correct way to use a function with params */}
            <button onClick={()=>pressButtonParams('Hello')}>
                Button 3
            </button>
            <input placeholder='Sending text to father' 
                onFocus={()=>console.log('input focused')}
                onChange={(e)=>console.log('Input Changed',e.target.value)}
                onCopy={(e)=>console.log('Copied text from input')}
                //Using ref to give a valor to hook messageRef
                ref = {messageRef}
            >    
            </input>
            <button 
                onClick={()=>send(messageRef.current.value)}>
                Send Message 
            </button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input placeholder='New Name '
                        ref = {nameRef}>
                    </input>
                    <button 
                        type='submit'>Update name
                    </button>
                </form>
            </div>
        </div>
    );
};


Child.propTypes = {

};


export default Child;
