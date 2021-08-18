import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/main.scss'

const HomeHello = () => {
    return (
        <div className="container-start">
            <div className="start">
                <div className="title">
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
                <div className="decor">
                    <div />
                </div>
                <div className="links">
                    <div><Link>oddaj<br/> rzeczy</Link></div>
                    <div><Link>zorganizuj<br/> zbiórkę</Link></div>
                </div>
                <div className="picture"></div>
            </div>
        </div>

    )
}

export default HomeHello;