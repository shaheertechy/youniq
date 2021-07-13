import React, { useEffect, useState } from 'react';

const TabProductContent = (props) => {
    const [categories, setCategories] = useState({});

    const handleOnclickCategory = (id) => {
        fetch("https://stg.youniq.art/api/data/product/list?categoryId=" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setCategories(result);
                    // setProducts(result);
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    useEffect(() => {
        console.log("catgory id: " + props.categoryId);
        handleOnclickCategory(props.categoryId);
    }, [props.categoryId])
    return (
        <React.Fragment>
            <div className="tab">
                <div className="row">
                    {Object.keys(categories).map(function (keyName, keyIndex) {
                        return (
                            <div key={keyIndex} className="col-md-6">
                                <div className="inner-tab">
                                    <div className="slider">
                                        <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                        <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                        <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                        <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                        <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                        <div className="texting">
                                            <h2><span>{keyName}  &nbsp;  </span>2815</h2><a href="#">Make it youniq</a></div>
                                        <div className="next-prev">
                                            <a className="next"><img src="images/lefticon.png" /></a> <a className="prev"><i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                                        <div className="slider__inner">
                                            {categories[keyName].map(function (product, index) {
                                                return (
                                                    <div className="slider__contents">
                                                        <div className="innner-tabs-slider"> <img src={product.image} /> </div>
                                                    </div>
                                                )
                                            })}
                                            {/* <div className="slider__contents">
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
                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            // <li key={keyName}>
                            // 	{keyName}
                            //     {console.log(OBJECTHERE[keyName])}
                            // </li>
                        )
                    })}
                    {/* <div className="col-md-6">
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
                         */}
                </div>
            </div>

        </React.Fragment>
    )
}

export default TabProductContent;