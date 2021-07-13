import React , { useState } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import { useTranslation, withTranslation } from 'react-i18next';

const ContactUs = () => {
    const {t, i18n} = useTranslation();
    const [currentLanguageVersion, setCurrentLanguageVersion] = useState('English Version');
    const [lng, setLng] = useState('en');
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      if(lng == 'en'){
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
                <Header changeLanguage={changeLanguage} currentLanguageVersion={currentLanguageVersion} lng={lng}  />
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="theory">
                                <h1>Make it Youniq</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid w2">
                <section className="container">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-9">
                            <div className="arrow">
                                <i className="fas fa-angle-left" />
                                <h1>Zurück</h1>
                            </div>
                            <div className="theory2">
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid w3">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form">
                                <h1>kontaktangaben</h1>
                                <form>
                                    <div className="inner-form">
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Vorname" required className="form1" />
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Nachname" required className="form5" />
                                        <input type="text" pattern="[A-Za-z0-9.@ ]{3,}" placeholder="  E-Mail" name="wasi" required className="form3" />
                                        <input type="text" pattern="[0-9  ]{11,18}" placeholder="  Telefonnummer" required className="form2" />
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Strasse / Hausnummer" required className="form6" />
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  PLZ / Stadt" required className="form4" />
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Land" required className="form4" />
                                        <br />
                                        <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" className="cbox" />
                                        <label htmlFor="vehicle1">lch akzeptiere die <span className="agb">AGBs</span></label><br />
                                        <div className="ankr"><a href="#">Anfrage abschicken</a></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid theory3">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                </section>
            </section>
            <Footer t={t} />
        </React.Fragment>
    )
}

export default ContactUs;