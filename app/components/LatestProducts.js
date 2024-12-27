import React, { useEffect, useState } from 'react'
import StyledProductsGrid from './styles/StyledProductsGrid';
import Center from './styles/Center';
import Card from './Card';

const LatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
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