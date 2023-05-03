import {axiosService} from "./axios.service";
import {urls} from "../components/configs/urls";

const commentsService = {
    get:()=> axiosService.get(urls.comments)
}

export {
    commentsService
}