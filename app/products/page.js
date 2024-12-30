"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

import Card from '../components/Card';
import { StyledProductsGrid } from '../components/styles/StyledProductsGrid';
import { Center } from '../components/styles/Center';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    // console.log(products);
    return (
        <Layout>
            <Center>
                <h1>All Products</h1>
                <StyledProductsGrid>
                    {products?.length > 0 && products.map(product => (
                        <Card key={product._id} {...product} />
                    ))}
                </StyledProductsGrid>
            </Center>
        </Layout>
    )
}

export default Product