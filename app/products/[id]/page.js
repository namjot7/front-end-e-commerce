"use client"
import { CartIcon } from '@/app/assets/buttons'
import { CartContext } from '@/app/components/CartContext'
import Layout from '@/app/components/Layout'
import ProductImages from '@/app/components/ProductImages'
import { Center, FlexCenter } from '@/app/components/styles/Center'
import { ButtonOutlined } from '@/app/components/styles/StyledButtons'
import { MainHead, SecondaryHead } from '@/app/components/styles/StyledHeader'
import { ProductInfo, StyledProductDetails } from '@/app/components/styles/StyledProductDetails'
import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from "react-router-dom";

const ProductDetails = ({ params }) => {
    const { addProduct } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [productId, setProductId] = useState("");

    // Get Product ID from URL
    // async function getProductId() {
    //     const res = await params;
    //     console.log(res);
    //     setProductId(res.id)
    // }
    // Get product 

    useEffect(() => {
        // getProductId();
        // or 
        params.then(res => {
            // console.log(res);
            setProductId(res.id)
        })
        if (productId) {
            fetch("/api/products/?id=" + productId)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
    }, [productId]);

    console.log(product);
    // console.log(productId);

    return (
        <Layout>
            <Center>
                {/* <h1>Product Details</h1> */}
                <StyledProductDetails>

                    <ProductImages images={product?.images || []} />

                    <ProductInfo>
                        <MainHead>{product?.title}</MainHead>
                        <div className='desc'>{product?.description}</div>
                        <SecondaryHead>${product?.price}</SecondaryHead>
                        <ButtonOutlined onClick={() => addProduct(product._id)}>
                            <span>Add to Cart<CartIcon /></span>
                        </ButtonOutlined>
                    </ProductInfo>
                </StyledProductDetails>
            </Center>
        </Layout >

    )
}

export default ProductDetails