import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const HomePage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])

    return (
        <div className='Homepage'>
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