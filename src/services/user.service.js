import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

const userService = {
    getAll:()=> axiosService.get(urls.users),
    create:(user)=> axiosService.post(urls.users, user),
    getById:(id)=> axiosService.get(`${urls.users}/${id}`),
    updateById:(id, user)=> axiosService.put(`${urls.users}/${id}`, user),
    deleteById:(id)=> axiosService.delete(`${urls.users}/${id}`)
}

export {
    userService
}