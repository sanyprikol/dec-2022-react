import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../service/car.service";
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:'onChange', resolver:joiResolver(carValidator)});
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate])
    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev);
        reset()
    }

    const update = async (car) => {

    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update: save)}>
            <input type="text" placeholder={'brand'}{...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'}{...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'}{...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?'Update' : 'Create'}</button>
        </form>

    // <form onSubmit={handleSubmit(carForUpdate?update: save)}>
    //     <input type="text" placeholder={'brand'}
    //            {...register('brand', {
    //                pattern: {
    //                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
    //                    message: 'Тільки літери, не більше 20'
    //                },
    //                required: {value: true, message: 'Це поле обов\'язкове'}
    //            })}/>
    //     {errors.brand && <span>{errors.brand.message}</span>}
    //     <input type="text" placeholder={'price'} {...register('price', {
    //         valueAsNumber: true,
    //         min: {value: 0, message: 'Не менше 0'},
    //         max: {value: 1000000, message: 'Не більше 1000000'},
    //         required: {value: true, message: 'Це поле обов\'язкове'}
    //     })}/>
    //     {errors.price && <span>{errors.price.message}</span>}
    //     <input type="text" placeholder={'year'} {...register('year', {
    //         valueAsNumber: true,
    //         min: {value: 1990, message: 'Не нижче 1990 року'},
    //         max: {value: new Date().getFullYear(), message: 'Не більше поточного року'},
    //         required: {value: true, message: 'Це поле обов\'язкове'}
    //     })}/>
    //     {errors.year && <span>{errors.year.message}</span>}
    //     <button disabled={!isValid}>{carForUpdate?'Update' : 'Create'}</button>
    // </form>
    );
};

export default CarForm;