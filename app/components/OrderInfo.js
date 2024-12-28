import React, { useState } from 'react'
import { CheckoutButton } from './styles/StyledButtons'
import styled from 'styled-components'
import { SecondaryHead } from './styles/StyledHeader'
import { Flex } from './styles/Center';

const Input = styled.input`
    font-size: 16px;
    display: block;
    width: 100%;
    outline: none;
    padding: 9px 15px;
    border-radius: 7px;
    margin-bottom:10px;
`;
const OrderInfo = ({ totalPrice, cartProducts }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");


    const handleCheckout = async (e) => {
        e.preventDefault();

        const formData = {
            username,
            email,
            city,
            postalCode,
            country,
            streetAddress,
            productsIds: cartProducts,
        };
        console.log(formData);

        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json();

        // Open the STRIPE checkout page
        if (data.url) window.location.href = data.url;
    }
    return (
        <div>
            <SecondaryHead>Order Information</SecondaryHead>

            <form action="/api/checkout" onSubmit={e => handleCheckout(e)}>
                {/*  <input type="hidden" name="products" value={cartProducts.join(",")} /> */}
                <Input type="text" placeholder='Full Name'
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <Input type="text" placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <Input type="text" placeholder='Street address'
                    value={streetAddress}
                    onChange={e => setStreetAddress(e.target.value)} />
                <Flex>
                    <Input type="text" placeholder='City'
                        value={city}
                        onChange={e => setCity(e.target.value)} />
                    <Input type="text" placeholder='Postal Code'
                        value={postalCode}
                        onChange={e => setPostalCode(e.target.value)} />
                </Flex>
                <Input type="text" placeholder='Country'
                    value={country}
                    onChange={e => setCountry(e.target.value)} />

                <CheckoutButton type='submit'>Pay ${totalPrice}</CheckoutButton>
            </form>
        </div >
    )
}

export default OrderInfo;