import React, { useEffect, useState } from 'react';
import {Carousel} from '3d-react-carousal';
import { set } from 'harmony-reflect';
const ProductImagesCarousel = (props) => {
    const [images, setImages] = useState([]);
    const [productimages, setproductimages] = useState([]);
    useEffect(() =>{
       let productImages = [];
       console.log(props.images);
       productimages.map((image, index) => {
            console.log(image);
            console.log('Image:', image.image);
            productImages.push(<img src={image.image} alt={index} />)
        });

        setImages(productImages);
       
    }, []);
    return (
        <Carousel slides={images} autoplay={false} interval={5000} />
    )
}

export default ProductImagesCarousel;