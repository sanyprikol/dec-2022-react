import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.data)
            .then(value => setPosts(value))
    }, [userId])
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;