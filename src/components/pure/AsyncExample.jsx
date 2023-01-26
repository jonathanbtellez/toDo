import { Button } from '@mui/material';
import React from 'react';

const AsyncExample = () => {
    
    async function generateNumber(){
        return 1;
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2);
    }

    function obtainNumber(){
        generateNumber().
            then(r => alert(`Response: ${r}`))
            .catch(error => `Something went wrong: ${error}`);
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then(r => alert(`Response: ${r}`))
            .catch(error => `Something went wrong: ${error}`);
    }

    async function saveSessionStorage(key,value){
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key));
    }

    function showStorage(){
        saveSessionStorage('name', 'Jonathan')
            .then(response =>{ 
                let value = response;
                alert(`Saved name: ${value}`);
            }).catch(error => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage(){
        
        let promise = new Promise((resolve, reject)=>{
            setTimeout(() => resolve('Hello world'),2000);
        });

        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    const returnError = async () =>{
        await Promise.reject(new Error('Ooooops'));
    }

    const consumeError = () => {
        returnError()
            .then((response => alert(`Everything is OK: ${response}`)))
            .catch(error => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'));
    }

    const urlNotFound = async() =>{
        try {
            let response = await fetch('https://invalidURL');
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error}, (Check your console)`)
        }
    }

    const mutiplePromise = async ()=>{
        let results = await Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2')
            ]
        ).catch(error => alert(`Something went wrong with your URL: ${error}`))
    }

    return (
        <div>
            <h1>Async examples</h1>
            <Button variant='contained' onClick={obtainNumber}>Obtain number</Button>
            <Button variant='contained' onClick={obtainPromiseNumber}>Obtain promise number</Button>
            <Button variant='contained' onClick={showStorage}>Obtain saved session storage</Button>
            <Button variant='contained' onClick={obtainMessage}>Obtain message</Button>
            <Button variant='contained' onClick={consumeError}>Getting an error</Button>
            <Button variant='contained' onClick={urlNotFound}>Request to unknown URL</Button>
            <Button variant='contained' onClick={mutiplePromise}>Work with multiply promise</Button>
        </div>
    );
}

export default AsyncExample;