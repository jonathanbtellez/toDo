import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';
import { Button } from '@mui/material';

/**
 *  nmp i rxjs
 *  esta libreria se debe importar para trabajr con observables
 */

const ObservableExample = () => {
    
    const [number, setnNumber] = useState(0);

    
    const obtainNewNumbers = () => {
   
        console.log('Subscription to Observable');
   
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New number', newNumber);
                    setnNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong: ${error}`);
                    console.log('Error in observable');
                },
                complete(){
                    alert(`Finished with ${number}`);
                    console.log('Done with the observable')
                }
            }
        )
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <Button 
                variant='contained' 
                color='secondary'
                onClick={obtainNewNumbers}
            >
                Obtain new numbers
            </Button>
        </div>
    );
}

export default ObservableExample;
