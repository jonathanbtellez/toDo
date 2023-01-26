import React, { useEffect, useState } from 'react';
import {getRandomUser} from '../../services/axiosService';
import { Button } from '@mui/material';

const AxiosExample = () => {
    
    
    const [user,setUser] = useState(null);

    const obtainRandomUser = () => {
        getRandomUser()
        .then(response =>{
            
            if(response.status === 200){
                setUser(response.data.results);
                console.log('user', user);
            }
        })
        .catch(error => {
            alert('Error: ', error);
        })
    }

   
    // useEffect(() => {
    //     obtainRandomUser;
    // }, []);


    return (
        <div>
            <h1>Axios example</h1>
            {user != null? (
                <div>
                    {/* <img alt='Avatar' src={user.picture.large} style={{height:'200px', width: '200px'}}/> */}
                    <h2>Name: {user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                </div>
            ):(
                <div>
                    <p>Generate a new user</p>
                    <Button variant='contained' onClick={obtainRandomUser}>Generate user</Button>
                </div>
            )}
        </div>
    );
}

export default AxiosExample;
