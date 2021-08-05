import React from 'react';
import '../styles/main.scss'

const HomeHeader = () => {
    return (
            <section>
                <div className="container">
                    <header>
                        <div className="container-header">
                            <div className="login">
                                <ul>
                                    <li><button className="login-button"><span>Zaloguj</span></button></li>
                                    <li><button className="login-button"><span>Załóż konto</span></button></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li><button>Start</button></li>
                                    <li><button>O co chodzi?</button></li>
                                    <li><button>O nas</button></li>
                                    <li><button>Fundacja i organizacje</button></li>
                                    <li><button>Kontakt</button></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <div className="container-start">
                        <div className="start empty"></div>
                        <div className="start">
                            <div className="title">
                                <h1>Zacznij pomagać!</h1>
                                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                            </div>
                            <div className="buttons">
                                <button>oddaj rzeczy</button>
                                <button>zorganizuj zbiórkę</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default HomeHeader;