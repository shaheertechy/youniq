//import { Carousel } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

const TabProductContent = (props) => {
    const [categories, setCategories] = useState({});

    const handleOnclickCategory = async (id) => {
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
                                    <Carousel indicators={true} >
                                        {categories[keyName].map(function (product, index) {
                                            return (
                                                <Carousel.Item key={index} >

                                                    <Link to={'/make-your-youniq/' + product.productId}>  <img

                                                        src={product.image}
                                                        alt="First slide"
                                                    /></Link>
                                                    <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                                    <div className="texting">
                                                        <h2><span>Ab CHF  &nbsp;  </span>{product.price}</h2><Link to={'/make-your-youniq/' + product.productId}>Make it youniq</Link></div>

                                                </Carousel.Item>
                                            )
                                        })}

                                    </Carousel>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </React.Fragment>
    )
}

export default TabProductContent;