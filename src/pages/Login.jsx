import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

export const Login = (props) => {
    const location = useLocation();
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname || '/'

    return (
        <div>
            Login page

            {fromPage}
        </div>
    );
}

