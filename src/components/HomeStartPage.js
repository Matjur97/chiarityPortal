import React from 'react';
import HomeHeader from './HomeHeader';
import HomeHello from './HomeHello';

import '../styles/main.scss';

const HomeStartPage = () => {
    return (
        <section className="start-page">
            <HomeHeader />
            <HomeHello />
        </section>
    )
}

export default HomeStartPage;