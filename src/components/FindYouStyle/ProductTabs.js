import { Carousel, Tab } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductTabs = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
            // fetch("https://stg.youniq.art/api/data/category/list")
            // .then(res => res.json())
            // .then(
            //   (result) => {
            //   console.log(result);
            //   },
        
            //   (error) => {
            //     this.setState({
            //       isLoaded: true,
            //       error
            //     });
            //   }
            // )
        
      });
    
   
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
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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
                                                <h2><span>Ab CHF  &nbsp;  </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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
                                                <h2><span>Ab CHF  &nbsp; </span>2815</h2><Link to={'make-your-youniq/1'} >Make it youniq</Link></div>
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