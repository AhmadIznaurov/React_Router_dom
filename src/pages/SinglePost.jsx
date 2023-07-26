import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


export const SinglePost = () => {
    const { id } = useParams()
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id])

    return (
        <div className='SinglePost'>
           <h1>{post.title}</h1>
            <p>
                <b>{post.body}</b>
            </p>
        </div>
    );
}
