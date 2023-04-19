import React, {useEffect, useState} from 'react';
import {carService} from "../../service/car.service";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate]= useState(null);

    useEffect(()=> {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            <hr/>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;