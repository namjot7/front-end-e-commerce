import React from 'react'
import { StyledHero } from './styles/StyledHero'
import { Center } from './styles/Center'
import Button from './Button'


const Hero = ({ product }) => {
    // Need to run the admin-dashboard project as well in terminal
    const imageUrl = `http://localhost:3001/${product.images[0]}`;


    return (
        <StyledHero>
            <div>
                <h2>{product.title}</h2>
                <p>From ${product.price} or ${product.price / 24}/mo. for 24 mos. at 7.99% APR</p>
                <p>Apple Intelligence available now</p>
                {/* <Button size='l'>Read more</Button> */}
                <Button primary={"y"}>Buy</Button>
            </div>
            <div>
                <img src={imageUrl} alt="product image" />
                {/* <img src={`./${product.images[0]}`} alt="" /> */}
            </div>
        </StyledHero>
    )
}

export default Hero