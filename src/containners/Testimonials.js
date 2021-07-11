import React from 'react';

const Testimonials = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Testimonials;