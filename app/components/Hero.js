import { useEffect, useState } from "react";
import React from 'react'
import StyledHero from './styles/StyledHero'
// import { Center } from './styles/Center'
import Button from './Button'
import Center from "./styles/Center";

const Hero = () => { // featured product
    // Need to run the admin-dashboard project as well in terminal
    const [featuredProduct, setFeaturedProduct] = useState(null);
    let imageUrl = "";
    const featured_id = "67639f1d9fe9a6e1caa5534a"; // iphone 16 pro

    useEffect(() => {
        fetch("/api/products/?id=" + featured_id)
            .then(res => res.json())
            .then(data => setFeaturedProduct(data));
    }, []);
    console.log(featuredProduct);
    imageUrl = `http://localhost:3001/${featuredProduct?.images[0]}`; // get first image in array

    return (
        <StyledHero>
            {featuredProduct && <>
                <div>
                    <h2>{featuredProduct.title}</h2>
                    <p>From ${featuredProduct.price} or ${featuredProduct.price / 24}/mo. for 24 mos. at 7.99% APR</p>
                    <p>Apple Intelligence available now</p>
                    <Button href={'/product/' + featuredProduct._id} primary="y" size='l'>Buy</Button>
                </div>
                <div>
                    <img src={imageUrl} alt="product image" />
                </div>
            </>}
        </StyledHero>
    )
}

export default Hero