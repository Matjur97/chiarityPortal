import React from 'react';
import '../../styles/main.scss';

const HomeThreeColumns = () => {
    return(
        <section className="columns">
            <div className="container">
                <div className="col">
                    <h1>10</h1>
                    <h2>oddanych worków</h2>
                    <p>
                        Fugiat est nostrud non dolor reprehenderit nulla velit. 
                        Sunt adipisicing consectetur ea ex laboris quis veniam.
                    </p>
                </div>
                <div className="col">
                    <h1>5</h1>
                    <h2>wspartych organizacji</h2>
                    <p>Fugiat est nostrud non dolor reprehenderit nulla velit. Sunt adipisicing consectetur ea ex laboris quis veniam.</p>
                </div>
                <div className="col">
                    <h1>7</h1>
                    <h2>zorganizowanych zbiórek</h2>
                    <p>Fugiat est nostrud non dolor reprehenderit nulla velit. Sunt adipisicing consectetur ea ex laboris quis veniam.</p>
                </div>
            </div>
        </section>

    )
}

export default HomeThreeColumns;