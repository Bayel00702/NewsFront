import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOutUser} from '../../../redux/reducers/auth'


const Header = () => {

    const dispatch = useDispatch()

    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <Link to='/' className="header__row">
                            <div className="header__card">
                                K
                            </div>

                            <div className="header__card">
                                B
                            </div>

                            <div className="header__card">
                                T
                            </div>
                        </Link>
                        <h1 className="header__title">
                            NEWS
                        </h1>
                    </div>
                    <ul className="header__list">

                        {
                            JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.user !== null ?
                                <li
                                    onClick={() => dispatch(logOutUser())}
                                    className="header__Link">
                                  Log out
                                </li>
                                :
                                <li className="header__item">
                                    <Link className='header__Link' to='loginAdmin'>Admin</Link>
                                </li>
                        }



                        {
                            JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.user?.isAdmin ?
                                <li className="header__item">
                                    <Link className='header__Link' to='/addarticle'>Add Article</Link>
                                </li> : ''
                        }

                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;