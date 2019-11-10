import React from 'react';
import Nav from './Nav';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';




class Gallery extends React.Component {






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
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={100}
                                totalSlides={3}
                                style={{ width: '500px' }}

                            >
                                <ButtonBack>Back</ButtonBack>
                                <Slider>
                                    <Slide index={0}><Image src={'./lily1.jpg'} /></Slide>
                                    <Slide index={1}><Image src={'./lily2.jpg'} /></Slide>
                                    <Slide index={2}><Image src={'./model.jpg'} /></Slide>
                                </Slider>

                                <ButtonNext>Next</ButtonNext>
                            </CarouselProvider>

                        </div>
                    </section>
                </div>




            </div>
        )
    }
}

export default Gallery;