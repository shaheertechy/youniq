import React, { useState } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import { useTranslation, withTranslation } from 'react-i18next';

const AboutUs = () => {


    const { t, i18n } = useTranslation();
    const [currentLanguageVersion, setCurrentLanguageVersion] = useState('English Version');
    const [lng, setLng] = useState('en');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (lng == 'en') {
            setCurrentLanguageVersion('Germen Version');
            setLng('ger');
        } else {
            setCurrentLanguageVersion('English Version');
            setLng('en');
        }
    }
    return (
        <React.Fragment>
            <section className="container-fluid w1">
                <Header changeLanguage={changeLanguage} currentLanguageVersion={currentLanguageVersion} lng={lng} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="centertext">
                                <h1>Your Unique Piece of Art:</h1>
                                <h2>
                                    Youniq.Art besteht aus einem <br />
                                    Team von Kunsthistoriker:innen</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid s2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="centertext2">
                  <h1>Was</h1>
                </div>
              </div>
              <div className="col-md 7">
                <div className="pera">
                  <p>«Kunst ist für den Menschen genauso ein Bedürfnis wie Essen und Trinken», schrieb Fjodor M.
                    Dostojewski. Wir greifen das bewährte Verfahren der Auftragsmalerei wieder auf und
                    übertragen es ins 21. Jahrhundert. Als Team aus Kunsthistoriker:innen haben wir kombiniert
                    jahrzehntelange Erfahrung am Kunstmarkt sowie ein umfangreiches Netzwerk an international
                    tätigen Künstler:innen. Unser Anspruch ist es, hochwertige Kunst von talentierten
                    Kunstschaffenden für alle möglich zu machen.</p>
                  <div className="ankr"><a href="#">So funktioniert es </a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid s2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="centertext2">
                  <h2>Warum</h2>
                </div>
              </div>
              <div className="col-md 7">
                <div className="pera">
                  <p>Jahrhundertelang waren Auftragsarbeiten ein wichtiger Bestandteil künstlerischen Schaffens.
                    Viele der weltweit ausgestellten Werke alter Meister wie Michelangelo Merisi da Caravaggio,
                    Albrecht Dürer, Peter Paul Rubens oder Caspar David Friedrich gehen auf Aufträge
                    einflussreicher und vermögender Kund:innen und Mäzen:innen zurück. Youniq.Art vermittelt
                    zwischen den individuellen Wünschen von Kunstinteressierten und der kreativen Freiheit von
                    Kunstschaffenden. So passen die Kunstwerke individuell zu den Sammler:innen. </p>
                  <div className="ankr"><a href="#">Finde deinen Style </a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid s3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="centertext2">
                  <h2>Adressen</h2>
                </div>
              </div>
              <div className="col-md 7">
                <div className="pera2">
                  <p><span className="spntext"> Zürich </span>
                    Winterthurerstrasse 52
                    8006 Zürich
                    <br />
                    +41 43 810 03 49
                  </p>
                  <p><span className="spntext"> London</span>
                    <br />
                    41 Marsham Court <br />
                    SW1 P4JT London <br />
                    +44 20 45 77 01 29
                  </p>
                  <p><span className="spntext">New York
                    </span>
                    <br />
                    216 East 5th Street <br />
                    10003 New York, NY <br />
                    +1 929 59 09 121
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            <Footer t={t} />
        </React.Fragment>
    );
}

export default AboutUs;