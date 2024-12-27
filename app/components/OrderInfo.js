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
const OrderInfo = ({ totalPrice }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [streetaddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");


    const handleCheckout = (e) => {
        e.preventDefault();

        const formData = {
            username, email, city, postalCode, country, streetaddress
        };
        console.log(formData);


    }
    return (
        <div>
            <SecondaryHead>Order Information</SecondaryHead>

            <form action="/api/checkout" onSubmit={e => handleCheckout(e)}>
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder='Full Name' />
                <Input value={email}
                    onChange={e => setEmail(e.target.value)} type="text" placeholder='Email' />
                <Input value={streetaddress}
                    onChange={e => setStreetAddress(e.target.value)} type="text" placeholder='Street address' />
                <Flex>
                    <Input value={city}
                        onChange={e => setCity(e.target.value)} type="text" placeholder='City' />
                    <Input value={postalCode}
                        onChange={e => setPostalCode(e.target.value)} type="text" placeholder='Postal Code' />
                </Flex>
                <Input value={country}
                    onChange={e => setCountry(e.target.value)} type="text" placeholder='Country' />

                <CheckoutButton type='submit'>Pay ${totalPrice}</CheckoutButton>
            </form>
        </div>
    )
}

export default OrderInfo