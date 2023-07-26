import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";



export const Posts = () => {

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])

    const nextFn = () => {
        navigate(1)
    }

    return (
        <div className='Homepage'>
            <h1>List of info</h1>
            <button className='nextFn' onClick={nextFn}>NEXT</button>
            <ul>
                {
                    posts.map((post) => {
                        return (
                            <li>
                                <Link className='link-no-underline' to={`/posts/${post.id}`}>
                                    {post.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
