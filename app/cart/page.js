"use client"
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { CartContext } from '../components/CartContext';
import Center from '../components/styles/Center';
import Button from '../components/Button';
import { StyledCartContainer } from '../components/styles/StyledCart';
import CartCard from '../components/CartCard';
import OrderInfo from '../components/OrderInfo';

const Cart = () => {
    const { cartProducts, setCartProducts } = useContext(CartContext); // stores product ids
    const [products, setProducts] = useState([])
    let totalPrice = 0;

    // Get price of products in the cart
    for (let pId of cartProducts) {
        let price = products.find(p => p._id == pId)?.price || 0;
        // console.log(price);
        totalPrice = totalPrice + price;
    }

    useEffect(() => {
        // GET products from Database
        if (cartProducts?.length > 0) {

            // Unique ids: Remove duplicate products
            const uniqIds = [...new Set(cartProducts)]; // get unique Ids using Set and convert them back to array
            // console.log(uniqIds);
            fetch("/api/products/?ids=" + uniqIds.join(","))
                .then(res => res.json())
                .then(data => setProducts(data))

            // calculatePrice();
        }
    }, [cartProducts])

    useEffect(() => {
        // calculatePrice();
    }, [])
    // console.log({ cartProducts, products });

    return (
        <Layout>
            <Center>
                <h1>Cart</h1>

                {!!cartProducts?.length && <StyledCartContainer>
                    <div>
                        {products.map(product => (
                            <CartCard key={product._id} {...product} />
                        ))}
                    </div>
                    <OrderInfo totalPrice={totalPrice} />
                </StyledCartContainer>}

                {!cartProducts?.length &&
                    <div>
                        <h2>Cart is empty.</h2>
                        <Button primary="y" href="/products">Explore the store</Button>
                    </div>
                }
            </Center>
        </Layout>
    )
}

export default Cart