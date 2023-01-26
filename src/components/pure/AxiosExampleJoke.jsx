import React, { useState } from 'react';
import { getRandomJoke } from '../../services/axiosService';
import { Button } from '@mui/material';

const AxiosExampleJoke = () => {


    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const obtainRandomJoke = () => {
        getRandomJoke()
            .then(response => {

                if (response.status === 200) {
                    console.log(response.data)
                    setJoke(response.data);
                    console.log('user', joke);
                }
            })
            .catch(error => {
                alert('Error: ', error);
            })
    }

    const goodJoke = () => {
        setLike(like +1);
    }

    const badJoke = () => {
        setDislike(dislike+1);
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



    return (
        <div>
            <h1>Chuck Morris Joke</h1>
            {joke != null ? (
                <div className='card border-secondary mb-3' style={{ background: "#ccc" }}>
                    <div className='card-header'>
                        <p className='card-title'>{joke.value} </p>
                    </div>
                    <ButtonGenerateJoke />
                    <div className='card-footer'>
                        <Button variant='contained'
                            onClick={goodJoke}
                            color='success'
                        ><i className="bi bi-hand-thumbs-up"></i> {like}
                        </Button> <span>    </span>
                        <Button variant='contained'
                            onClick={badJoke}
                            color='error'
                        ><i className="bi bi-hand-thumbs-down"></i> {dislike}
                        </Button>
                    </div>
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
