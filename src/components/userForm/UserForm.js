import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const UserForm = ({setAllUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:"onChange" })

    const save = async (user) => {
        const {data} = await userService.create(user);
        setAllUsers(prev=>!prev);
        reset()
        console.log(data);

    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"}
                   placeholder={'name'} {...register('name', {
                pattern:
                    {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ ]{1,20}$/,
                        message: 'Імя тільки з літер і до 20 символів'
                    },
                required: true
            })}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type={"text"} placeholder={'username'} {...register('username', {
                pattern:
                    {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'Username тільки з літер і до 20 символів'
                    },
                required: true
            })}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type={"text"} placeholder={'email'} {...register('email', {
                pattern:
                    {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: 'Email невалідний'
                    },
                required: true
            })}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type={"text"} placeholder={'phone'} {...register('phone', {
                valueAsNumber: true ,required: true}
            )}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <button disabled={!isValid}>SAVE</button>
        </form>
    );
};

export default UserForm;