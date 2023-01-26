import React, { useState } from 'react';
import { getRandomJoke } from '../../services/axiosService';
import { Button } from '@mui/material';

const AxiosExampleJoke = () => {


    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [votation, setVotation] = useState(false);

    const obtainRandomJoke = () => {
        getRandomJoke()
            .then(response => {

                if (response.status === 200) {
                    console.log(response.data)
                    setJoke(response.data);
                    console.log('user', joke);
                    setVotation(false);
                }
            })
            .catch(error => {
                alert('Error: ', error);
            })
    }

    const goodJoke = () => {
        setLike(like + 1);
        setVotation(true);
    }

    const badJoke = () => {
        setDislike(dislike + 1);
        setVotation(true);
    }

    const ButtonGenerateJoke = () => {
        return (
            <div className="card-body">
                <Button variant='contained'
                    onClick={obtainRandomJoke}
                    color='secondary'
                >Generate a new joke
                </Button>
            </div>
        )
    }

    const ButtonsVotation = () => {
        return (
            <div className='card-footer'>
            {!votation ? (
                <div className='d-flex justify-content-evenly mb-3'>
                    <Button variant='contained'
                        onClick={goodJoke}
                        color='success'
                    ><i className="bi bi-hand-thumbs-up"></i>
                    </Button>
                    <Button variant='contained'
                        onClick={badJoke}
                        color='error'
                    ><i className="bi bi-hand-thumbs-down"></i> 
                    </Button>
                </div>
            ) : (
                <p>You already had voted</p>
            )
            }
                <div className='d-flex justify-content-evenly'>
                    <span class="badge bg-success">You had liked: {like}</span>
                    <span class="badge bg-danger">  you had dislike: {dislike}</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Chuck Morris Joke</h1>
            {joke != null ? (
                <div className='card border-secondary mb-3' style={{ background: "#ccc" }}>
                    <div className='card-header'>
                        <p className='card-title'>{joke.value} </p>
                    </div>
                    <ButtonGenerateJoke />
                    <ButtonsVotation />
                </div>
            ) : (
                <div>
                    <h1>Welcome!!</h1>
                    <h2>For read a joke of Chuck Morris made click in the button</h2>
                    <ButtonGenerateJoke />
                </div>
            )}
        </div>
    );
}

export default AxiosExampleJoke;
