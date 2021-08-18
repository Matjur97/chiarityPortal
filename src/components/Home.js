import React from 'react';
import HomeStartPage from './homeElements/HomeStartPage';
import HomeThreeColumns from './homeElements/HomeThreeColumns';
import HomeSteps from './homeElements/HomeSteps';
import HomeAbout from './homeElements/HomeAbout';
import HomePagination from './homeElements/HomePagination';
import HomeForm from './homeElements/HomeForm';
import HomeFooter from './homeElements/HomeFooter';

import '../styles/main.scss';

const Home = () => {
    return (
        <>
            <HomeStartPage />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAbout />
            <HomePagination />
            <HomeForm />
            <HomeFooter />
        </>
    )
}

export default Home;