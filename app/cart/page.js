"use client"
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { CartContext } from '../components/CartContext';
import Button from '../components/Button';
import { EmptyCart, PaymentSuccess, StyledCartContainer } from '../components/styles/StyledCart';
import CartCard from '../components/CartCard';
import OrderInfo from '../components/OrderInfo';
import { SecondaryHead } from '../components/styles/StyledHeader';
import { Center, FlexCenter } from '../components/styles/Center';
import { CartIcon, TickIcon } from '../assets/buttons';

const Cart = () => {
    const { cartProducts, clearCart, showSuccess } = useContext(CartContext); // stores product ids

    const [products, setProducts] = useState([])
    let totalPrice = 0;

    // Get price of products in the cart
    for (let pId of cartProducts) {
        let price = products.find(p => p._id == pId)?.price || 0;
        // console.log(price);
        totalPrice = totalPrice + price;
    }

    // GET products from Database
    useEffect(() => {
        if (cartProducts?.length > 0) {
            // Unique ids: Remove duplicate products
            const uniqIds = [...new Set(cartProducts)]; // get unique Ids using Set and convert them back to array
            // console.log(uniqIds);
            fetch("/api/products/?ids=" + uniqIds.join(","))
                .then(res => res.json())
                .then(data => setProducts(data))
        }
        // calculatePrice();
    }, [cartProducts])

    // Payment Successful
    useEffect(() => {
        if (window.location.href.includes("success")) {
            clearCart()
        }
        // calculatePrice();
    }, [])
    // console.log({ cartProducts, products });

    return (
        <Layout>
            <Center>

                {showSuccess &&
                    <PaymentSuccess>
                        <TickIcon />
                        <p>Payment Successful. We will sent you an email when your order is shipped.</p>
                    </PaymentSuccess>
                }

                {!!cartProducts?.length &&
                    <StyledCartContainer>
                        <h1>Cart</h1>
                        <div>
                            {products.map(product => (
                                <CartCard key={product._id} {...product} />
                            ))}
                        </div>
                        <OrderInfo totalPrice={totalPrice} cartProducts={cartProducts} />
                    </StyledCartContainer>}

                {!cartProducts?.length &&
                    <EmptyCart>
                        <img src="/cart.png" alt="" />
                        <h1>Your Cart is <span>Empty!</span></h1>
                        <Button primary="y" href="/products">Explore the store</Button>
                    </EmptyCart>
                }
            </Center>
        </Layout>
    )
}

export default Cart