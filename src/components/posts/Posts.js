import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.data)
            .then(value => setPosts(value))
    }, [])
    return (
        <div>
            {post&&
            <div>
                <div>userId: {post.userId}</div>
                <div>id: {post.id}</div>
                <div>tetle: {post.title}</div>
                <div>body: {post.body}</div>
                <br/>
            </div>
            }

            {posts.map(post => <Post post={post} key={post.id} setPost={setPost}/>)}
        </div>
    );
};

export default Posts;