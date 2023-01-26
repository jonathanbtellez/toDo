import React, { useEffect, useState } from 'react';
import { getAllPageUsers, getAllUsers, getUserDetails, login } from '../../services/fetchServices';
import { Button } from '@mui/material';


const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [numberUsers, setNumberUsers] = useState(12);
    const [userPerPage, setUserPerPage] = useState(6);
    const [pages, setPages] = useState(2);
    const [page, setPage] = useState(1);

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then(response => {
                console.log('All users: ', response.data);
                setUsers(response.data);
                setNumberUsers(response.total);
                setUserPerPage(response.per_pages);
                setPages(response.total_pages);
                setPage(response.page);
            }).catch(error => {
                alert(`Error retrieving the users ${error}`)
            }).finally(() => {
                console.log('Ended obtaining users:')
                console.table(users)
            })
    }

    const obtainPageUsers = (page) => {
        getAllPageUsers(page)
            .then(response => {
                console.log('All paged users: ', response.data);
                setUsers(response.data);
                setNumberUsers(response.total);
                setUserPerPage(response.per_page);
                setPages(response.total_pages);
                setPage(response.page);
            }).catch(error => {
                alert(`Error retrieving the users ${error}`)
            }).finally(() => {
                console.log('Ended obtaining users:')
                console.table(users)
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then(response => {
                console.log('Selected user: ', response.data);
                setSelectedUser(response.data);
            }).catch(error => {
                alert(`Error retrieving the user ${error}`)
            }).finally(() => {
                console.log('Ended obtaining user:')
                console.table(selectedUser);
            })
    }

    const authUser = () => {
        login("eve.holt@reqres.in", "cityslicka")
            .then(response => {
                console.log('TOKEN: ', response.token);
                sessionStorage.setItem(response.token);
            }).catch(error => {
                alert(`Error while login user ${error}`)
            }).finally(() => {
                console.log('Ended login user, navigate to home');
            }
        )
    }

    return (
        <div>
            <Button variant='contained' color='info' onClick={authUser}>Login <i class="bi bi-box-arrow-in-left"></i></Button>
            <h2>Users:</h2>
            {users.map((user, index) => (
                <p key={index}>
                    {user.first_name} {user.last_name} {"  "}
                    <Button variant='contained' onClick={() => obtainUserDetails(user.id)}><i class="bi bi-eye"></i></Button>
                </p>
            )
            )}
            {/* Making a paginator */}
            <p>Showing {userPerPage} users of {numberUsers}</p>
            <Button onClick={() => obtainPageUsers(1)} variant='contained' color='secondary'>
                1
            </Button>
            <Button onClick={() => obtainPageUsers(2)} variant='contained' color='secondary'>
                2
            </Button>
            <p>Page: {page} of {pages} pages</p>
            {
                selectedUser != null ? (
                    <div>
                        <h3>
                            User details
                        </h3>


                        <div>
                            <img alt='Avatar' src={selectedUser.avatar} style={{ height: '150px', width: '150px' }} />
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last Name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                        </div>


                    </div>
                ) : (<p>Choice a user to see the details</p>)
            }

        </div>
    );
}

export default FetchExample;
