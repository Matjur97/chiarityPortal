import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/main.scss'

const HomeHeader = () => {
    return (
        <header>
            <div className="container-header">
                <div className="login">
                    <ul>
                        <li><Link to="/" className="login-link"><span>Zaloguj</span></Link></li>
                        <li><Link to="/" className="login-link"><span>Załóż konto</span></Link></li>
                    </ul>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Start</Link></li>
                        <li><Link to="/">O co chodzi?</Link></li>
                        <li><Link to="/">O nas</Link></li>
                        <li><Link to="/">Fundacja i organizacje</Link></li>
                        <li><Link to="/">Kontakt</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;