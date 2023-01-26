import { async } from "rxjs";

export const getAllUsers = async () =>{
  
    let response = await fetch('https://reqres.in/api/users');
    
    console.log('Response: ', response);
    console.log('Status: ',response.status);
    console.log('Ok?: ',response.ok);
    return response.json();

    // Return used when we manage the response in the component
    // return response
}


export const getAllPageUsers = async (page) =>{
  
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    
    console.log('Response: ', response);
    console.log('Status: ',response.status);
    console.log('Ok?: ',response.ok);
    return response.json();

    // Return used when we manage the response in the component
    // return response
}

export const getUserDetails = async (id)=>{
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    
    console.log('Response: ', response);
    console.log('Status: ',response.status);
    console.log('Ok?: ',response.ok);
    return response.json();
}

export const login = async(email, password) =>{
    let body = {
        email:email,
        password:password
    } 

    // Setting fetch to made a post HTTPRequest
    let response = await  fetch("https://reqres.in/api/login",{
        method:"POST",
        mode:'no-cors',
        credentials:'omit',
        cache: 'no-cache',
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(body),   
    });

    console.log('Response: ', response);
    console.log('Status: ',response.status);
    console.log('Ok?: ',response.ok);

    return response.json();
}