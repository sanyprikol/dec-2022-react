import React from 'react';

const Launch = ({launch}) => {
    const {flight_number, mission_name, launch_year, } = launch

    return (
        <div>
            <div>flight_number: {flight_number}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <hr/>
        </div>
    );
};

export default Launch;