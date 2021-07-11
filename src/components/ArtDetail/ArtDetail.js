import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

const ArtDetail = () => {
    return (
        <React.Fragment>
            <section className="main">
                <div className="container-fluid">
                    <Header />
                    <div class="container">
                        <div class="row ">
                            <div class="col-md-12 for-first-heading-speacing">
                                <div class="for-first-heading">
                                    <h1>Make it Youniq</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container for-padding">
                        <div className="row">
                            <div className="col-md-12 d-flex for-display">
                                <div className="col-md-7 for-img">
                                    <div className="simple-gallery">
                                        <img className="maxi" src="/img/1.jpg" />
                                    </div>
                                    <div className="mySlides">
                                        <img src="/img/b1.jpeg" style={{ width: '100%', borderRadius: '10px' }} />
                                    </div>
                                    <div className="mySlides">
                                        <img src="/img/b2.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                                    </div>
                                    <div className="mySlides">
                                        <img src="/img/b3.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                                    </div>
                                    <div className="mySlides">
                                        <img src="/img/b4.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                                    </div>
                                    <div className="mySlides">
                                        <img src="/img/5.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                                    </div>
                                    <div className="mySlides">
                                        <img src="/img/1.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                                    </div>
                                </div>
                                <div className="col-md-5 for-inner-padding">
                                    <div className="col-5-heading">
                                        <h1 className="heading-h1">Stelle deinen Style zusammen</h1>
                                        <p className="pera-p">Wähle den Style, der dir am besten gefällt. Teste aus, wie er in der
                                            Umgebung aussieht.</p>
                                        <h6 className="heading-h6">Style-Beispiele</h6>
                                    </div>
                                    <div className="for-img-slider">
                                        <ul className="for-slider-ul">
                                            <div className="mini">
                                                <li className="for-slider-li d-inline for-border">
                                                    <img className="for-box-border" src="/img/1.jpg" />
                                                </li>
                                                <li className="for-slider-lia d-inline for-border">
                                                    <img className="for-box-border" src="/img/2.jpg" />
                                                </li>
                                                <li className="for-slider-lib d-inline for-border">
                                                    <img className="for-box-border" src="/img/3.jpg" />
                                                </li>
                                                <li className="for-slider-lic d-inline for-border">
                                                    <img className="for-box-border" src="/img/4.jpg" />
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="col-5-heading">
                                        <h6 className="heading-h6">Umgebung</h6>
                                    </div>
                                    <div className="for-img-slider">
                                        <ul className="for-slider-ul">
                                            <li className="for-icon d-inline for-css">
                                                <a href="#"><i className="fa fa-plus imgAdd" /></a>
                                            </li>
                                            <li className="for-slider-li d-inline for-border">
                                                <img className="demo cursor for-border-radius" src="/img/b1.jpeg" style={{ width: '19%' }} onclick="currentSlide(1)" />
                                            </li>
                                            <li className="for-slider-lia d-inline for-border">
                                                <img className="demo cursor for-border-radius" src="/img/b2.jpg" style={{ width: '16%' }} onclick="currentSlide(2)" />
                                            </li>
                                            <li className="for-slider-lia d-inline for-border">
                                                <img className="demo cursor for-border-radius" src="/img/b3.jpg" style={{ width: '18%' }} onclick="currentSlide(3)" />
                                            </li>
                                            <li className="for-slider-li d-inline for-border">
                                                <img className="demo cursor for-border-radius" src="/img/b4.jpg" style={{ width: '18%' }} onclick="currentSlide(4)" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-5-heading">
                                        <h6 className="heading-h6">Größe</h6>
                                    </div>
                                    <div className="for-grob-sec">
                                        <div className="col-for-3">
                                            <p className="for-box-p">Länge <br /> <span className="for-100"> 100 </span> <span className="for-cm">cm</span></p>
                                        </div>
                                        <div className="col-for-1">X</div>
                                        <div className="col-for-3">
                                            <p className="for-box-p">Breite<br /> <span className="for-100"> 100 </span> <span className="for-cm">cm</span></p>
                                        </div>
                                    </div>
                                    <div className="col-5-heading">
                                        <h6 className="heading-h6">Preis</h6>
                                    </div>
                                    <div className="col-main-peers d-flex">
                                        <div className="d-flex for-col-12">
                                            <div className="col-for-peers">
                                                <p className="for-box">2815</p>
                                            </div>
                                            <div className="col-for-peers">
                                                <p className="for-boxab">CHF </p>
                                            </div>
                                        </div>
                                        <div className="for-button">
                                            <button type="button" className="btn"> <a href="#"> Weiter zur Anfrage </a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 paddinga">
                                <div className="for-last-heading">
                                    <h2>Details</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row for-last-heading-padding paddingaba">
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    <h6>Technik</h6>
                                    <p>Acryl und Häkelgarn auf Leinwand</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    <h6>Grössen</h6>
                                    <p>84 x 117 bis 182 x 182 cm</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    <h6>Auftragsform</h6>
                                    <p>Fotografische Vorlage, Freier Auftrag</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    <h6>Länge</h6>
                                    <p>175 cm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default ArtDetail;