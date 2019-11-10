import React from 'react';
import Nav from './Nav';

class Media extends React.Component {
    render() {
        return (
            <div className="outer-wrapper">

                <Nav />
                <div className="about-wrapper">
                    <div className="title-area">
                        <h1 className="name-header">
                            Lily Marcheschi
                        </h1>
                    </div>
                    <section className="content">
                        <div className="main-content" style={{ justifyContent: "center" }}>
                            <div className="bio-image-container">
                                <div className="bio-image-wrapper">
                                    <img className="bio-image" src="./model.jpg" />
                                </div>
                            </div>

                        </div>
                    </section>
                </div>




            </div>
        )
    }
}

export default Media;