import { Tab } from 'bootstrap';
import React, { useState } from 'react';
import { Tabs } from 'react-bootstrap';

const ProductTabs = () => {
   
    return (
        <React.Fragment>
            <div className="tabs-container">
                <div className="tabs-block">
                    <div className="tabs">
                        <input type="radio" name="tabs" id="tab1" defaultChecked="checked" />
                        <label htmlFor="tab1"><span className="material-icons">Alle</span></label>
                        <div className="tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next"><img src="images/lefticon.png" /></a> <a className="prev"><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/inner1.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab2.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab3.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab4.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="radio" name="tabs" id="tab2" />
                        <label htmlFor="tab2"><span className="material-icons">Collage</span> </label>
                        <div className="tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/inner1.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab2.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab3.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab4.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="tabs" id="tab3" />
                        <label htmlFor="tab3"><span className="material-icons">Druck</span></label>
                        <div className="tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/inner1.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab2.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab3.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab4.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="tabs" id="tab4" />
                        <label htmlFor="tab4"><span className="material-icons">Malerei</span></label>
                        <div className="tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/inner1.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab2.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab3.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab4.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="tabs" id="tab5" />
                        <label htmlFor="tab5"><span className="material-icons">Skulptur</span></label>
                        <div className="tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/inner1.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab2.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab3.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab4.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="tabs" id="tab6" />
                        <label htmlFor="tab6"><span className="material-icons">Zeichnung</span></label>
                        <div className="tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/inner1.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab2.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab3.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-tab">
                                        <div className="slider">
                                            <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                            <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                            <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                            <div className="texting">
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><a href="#">Make it youniq</a></div>
                                            <div className="next-prev">
                                                <a className="next" href><img src="images/lefticon.png" /></a> <a className="prev" href><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                            <div className="slider__inner">
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/tab4.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                                <div className="slider__contents">
                                                    <div className="innner-tabs-slider"> <img src="images/black.PNG" /> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductTabs;