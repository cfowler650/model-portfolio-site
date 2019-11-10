import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Home extends React.Component {
    render() {
        return (
            <div className="img-container" >
                <div className="bg-overlay">
                </div>

                <Nav />

                <div className="name-div">

                    <h1 className="name-h1">Lily Marcheschi</h1>
                    <h1 className="name-h1" style={{ fontSize: "23px", color: 'rgba(255,255,255,0.95)' }}>Actor </h1>

                </div>
            </div>
        )
    }
}

export default Home;