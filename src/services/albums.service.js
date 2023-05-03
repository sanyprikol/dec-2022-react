import {axiosService} from "./axios.service";
import {urls} from "../components/configs/urls";

const albumsService = {
    get: () => axiosService.get(urls.albums)
}

export {
    albumsService
}