import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = (props) => {
    return (
        <div className='nav'>
            <ul className='nav-item'>
                <li className='nav-link'>
                    <NavLink to='/'>
                        Главная
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/AboutUs'>
                        О нас
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/Contacts'>
                        Контакты
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/posts'>
                        Posts
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

