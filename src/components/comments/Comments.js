import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/comments.service";
import Comment from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
commentsService.get().then(value => value.data).then(value => setComments([...value]))
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default Comments;