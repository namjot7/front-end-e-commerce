import React, { useEffect, useState } from 'react'
import Card from './Card';
import { StyledProductsGrid } from './styles/StyledProductsGrid';
import { Center } from './styles/Center';

const LatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products/?latest=true")
            .then(res => res.json())
            .then(data => setLatestProducts(data));
    }, []);
    // console.log(latestProducts);

    return (
        <Center>
            <h1>New Arrivals</h1>
            <StyledProductsGrid>
                {latestProducts.map(product => (
                    <Card key={product._id} {...product} cartBtn />
                ))}
            </StyledProductsGrid>
        </Center>
    )
}

export default LatestProducts