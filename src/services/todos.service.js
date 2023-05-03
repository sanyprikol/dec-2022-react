import {axiosService} from "./axios.service";
import {urls} from "../components/configs/urls";

const todosService = {
    get:() => axiosService.get(urls.todos)
}

export {
    todosService
}