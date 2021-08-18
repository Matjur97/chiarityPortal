import React from 'react';
import HomeHeader from './homeElements/HomeHeader';
import RegisterForm from './registerElements/RegisterForm';

import '../styles/main.scss';

const Register = () => {
    return (
        <section className="register-page">
            <HomeHeader />
            <RegisterForm />
        </section>
    )
}

export default Register;