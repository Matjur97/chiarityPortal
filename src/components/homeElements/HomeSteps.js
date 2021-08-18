import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/main.scss';

const HomeSteps = () => {
    return(
        <section className="steps">
            <div className="title-steps">
                <h1>Wystarczą 4 proste kroki</h1>
                <div className="deco"></div>
            </div>
            <div className="container-steps">
                <div className="content">
                <div className="col">
                    <div className="image shirt"></div>
                    <h3>Wybierz rzeczy</h3>
                    <div className="line"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="col">
                    <div className="image bag"></div>
                    <h3>Spakuj je</h3>
                    <div className="line"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="col">
                    <div className="image loupe"></div>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <div className="line"></div>
                    <p>wybiez zaufane miejsce</p>
                </div>
                <div className="col">
                    <div className="image arrows"></div>
                    <h3>Zamów kuriera</h3>
                    <div className="line"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
                </div>
            </div>
            <div className="button">
                <Link to="/"><span>oddaj</span><span>rzeczy</span></Link>
            </div>
        </section>
    )
}

export default HomeSteps;