import React from 'react';
import Nav from './Nav';

class About extends React.Component {
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
                        <div className="main-content">
                            <div className="bio-image-container">
                                <div className="bio-image-wrapper">
                                    <img className="bio-image" src="./lily2.jpg" />
                                </div>
                            </div>
                            <div className="bio-text">
                                <p>
                                    Originally from San Francisco, CA, mezzo-soprano Olivia Cosío has been hailed as a "formidable talent, with a large, sure voice...and a charismatic, even striking,
                                    stage presence" (San Francisco Classical Voice). She is currently a
                                     Master of Music degree student at The Juilliard School, studying with Elizabeth Bishop.
                                </p>
                                <p>
                                    This upcoming season, Ms. Cosío makes two house debuts: as Rosina in Il Barbiere di Siviglia with Opera Columbus and as a Gerdine Young Artist with Opera Theater of St. Louis. Ms. Cosío will take part in an AMOC* (A Modern Opera Company) workshop of a new piece by Matthew Aucoin, and will appear with the New York Festival of Song (NYFOS),
                                    led by Steve Blier, for their “Cubans in Paris” program as part of the NYFOS@Juilliard residency.
                                    This will be her second appearance with NYFOS this season, the first having been the “Ports of Call” program in Orient, NY.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>




            </div>
        )
    }
}

export default About;