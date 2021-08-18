import React from 'react';
import HomeHeader from './homeElements/HomeHeader';
import LogoutPage from './LogoutElements/LogoutPage';
import '../styles/main.scss';

const Logout = () => {
    return(
        <section className="logout-page">
        <HomeHeader />
        <LogoutPage />
    </section>
    )
}

export default Logout;