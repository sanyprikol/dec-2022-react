import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albums.service";
import Album from "../album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        albumsService.get().then(value => value.data).then(value => setAlbums([...value]))
    }, [])
    return (
        <div>
            {albums.map(album => <Album album={album} key={album.id}/>)}
        </div>
    );
};

export default Albums;