import React from 'react';
import { Link } from 'react-router-dom';
const LogoutPage = () => {
    return(
        <div className="logout-container">
            <h1>Wylogowano nastąpiło pomyślnie!</h1>
            <div className="deco" />
            <Link className="to-home" to="/">Strona główna</Link>
        </div>
    )
}

export default LogoutPage;