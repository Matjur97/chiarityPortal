import React from 'react';
import '../../styles/main.scss';

const HomeFooter = () => {
    return(
        <footer>
            <div className="dist" />
            <span>Copyright by ASD</span>
            <div className="dist icons">
                <div className="fb box" />
                <div className="insta box" />
            </div>
        </footer>
    )
}

export default HomeFooter;