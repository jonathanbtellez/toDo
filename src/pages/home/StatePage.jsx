import React from 'react';
import {useLocation} from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();

    console.log(location);

    const search = location.search.split("=");

    let searchResult = search[search.length-1];

    return (
        <div>
            <h2>Using query params</h2>
            <h3>{searchResult === "true" ? "The user is online" : "The user is not online"}</h3>
        </div>
    );
}

export default StatePage;
