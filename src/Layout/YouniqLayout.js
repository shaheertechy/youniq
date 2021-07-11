import React from 'react';
import Banner from '../components/common/Banner';
import Header from '../components/common/Header';

const YoniqLayout = (props) => {

    return (
        <React.Fragment>
            <section className="wrapp1">
                <div className="container-fluid ten1">
                   <Header />
                   <Banner />
                </div>
            </section>
            <div style={{ clear: 'both' }} />
            <div className="container-fluid ten2-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>Wie's funktionert</h2> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid ten3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round1.PNG" /></div>
                                <div className="text-round">
                                    <h5>Wähle deinen Style</h5>
                                    <p>Wie soll das nur für dich erschaffene Kunstwerk aussehen? Lass dich von bereits existierenden Kunstwerken inspirieren und finde deinen Style.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round3.PNG" /></div>
                                <div className="text-round">
                                    <h5>Erhalte eine Offerte</h5>
                                    <p>Wähle jetzt noch das Format. Wir sagen dir, was dein Kunstwerk kostet und wann du es bekommst. Bezahlen kannst du mit nur einem Klick.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid ten7">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round2.PNG" /></div>
                                <div className="text-round">
                                    <h5>Make it Youniq</h5>
                                    <p>Was soll konkret drauf sein? Unsere Künstler:innen setzen dein gewünschtes Motiv um. Bist du mutig drauf? Dann lass dich überraschen.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round4.PNG" /></div>
                                <div className="text-round">
                                    <h5>Erfreue dich an deiner Kunst</h5>
                                    <p>Gratulation, du bist jetzt Kunstsammleri:in. Schon bald kannst du dein persönliches Kunstwerk aufhängen. Einfach Youniq!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="heading-die"> <img src="images/Capture.png" />
                <h4>Die Lieferung ist für die gesamte Schweiz gratis</h4> </div>
            <div className="container-fluid ten4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial">
                                <div className="heading">
                                    <h1>Testimonials</h1></div>
                                <div className="slider">
                                    <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                    <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                    <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                    <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                    <div className="next-prev">
                                        <a className="next"><img src="images/arrowleft.png" /></a>
                                        <a className="prev"><img src="images/arrowright.png" /></a>
                                    </div>
                                    <div className="slider__inner">
                                        <div className="slider__contents">
                                            <div className="float1"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!»</p>
                                                <h6>Fabienne</h6> </div>
                                        </div>
                                        <div className="slider__contents">
                                            <div className="float2"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!»</p>
                                                <h6>Fabienne</h6> </div>
                                        </div>
                                        <div className="slider__contents">
                                            <div className="float3"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!»</p>
                                                <h6>Fabienne</h6> </div>
                                        </div>
                                        <div className="slider__contents">
                                            <div className="float4"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!»</p>
                                                <h6>Fabienne</h6> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container-fluid w5">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="foot"> <div className="logo2">
                                <img src="images/logo.png" />
                            </div></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="number">
                                <h1>+41 34 810 03 49
                                    contect@youniq.com
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-8" />
                        <div className="col-md-2">
                            <div className="number">
                                <h1><span className="underline"> kontakt
                                    Datenschutzerklarung
                                    Impressum
                                </span></h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default YoniqLayout;