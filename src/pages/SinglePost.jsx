import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";



export const SinglePost = () => {

    const { id } = useParams()

    const [post, setPost] = useState([]);

    const navigate = useNavigate()
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id])

    const preFn = () => {
        navigate(-1)
    }

    return (
        <div className='SinglePost'>
            <button className='preFn' onClick={preFn}>PRE</button>
            { post && (
                <>
                    <h1>{post.title}</h1>
                    <p>
                        <b>{post.body}</b>
                    </p>
                </>
            )}
        </div>
    );
}
