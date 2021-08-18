import React from 'react';
import HomeHeader from './homeElements/HomeHeader';
import LoginForm from './loginElements/LoginForm';

import '../styles/main.scss';

const Login = () => {
    return (
        <section className="login-page">
            <HomeHeader />
            <LoginForm />
        </section>
    )
}

export default Login;