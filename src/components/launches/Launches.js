import React, {useEffect, useState} from 'react';
import axios from "axios";
import Launch from "../launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/')
            .then(value => value.data)
            .then(value => {
                const filtered = value.filter(item => item.launch_year !== "2020");
                setLaunches(filtered)
            })
    }, [])

    return (
        <div>
            {launches.map((launch, index) => <Launch launch={launch} key={index}/>)}
        </div>
    );
};

export default Launches;