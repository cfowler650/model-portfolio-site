import React from 'react';
import Nav from './Nav';




var slideIndex = 1;

class Gallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            myState: 1
        }

        this.showDivs = this.showDivs.bind(this)

    }


    plusDivs(n) {
        this.showDivs(slideIndex += n);
    }

    showDivs(n) {

        var i;
        var x = document.getElementsByClassName("bio-image");
        console.log(x)
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        if (x) {
            console.log(x)
            // x[slideIndex - 1].style.display = "block";
        }
    }




    render() {
        this.showDivs(slideIndex);

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
                            <button class="w3-button w3-display-left" >&#10094; </button>
                            <div className="bio-image-container">
                                <div className="bio-image-wrapper">
                                    <img className="bio-image" src="./model.jpg" />
                                    <img className="bio-image" src="./lily1.jpg" />

                                </div>
                            </div>

                            <button class="w3-button w3-display-right" >&#10095;</button>

                        </div>
                    </section>
                </div>




            </div>
        )
    }
}

export default Gallery;