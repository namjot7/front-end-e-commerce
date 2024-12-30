import React, { useContext, useEffect } from 'react'
import { QunatityLabel, StyledCartCard } from './styles/StyledCart'
import { MinusIcon, PlusIcon } from '../assets/buttons'
import { CartContext } from './CartContext'
import { Flex } from './styles/Center'
import { adminHost } from './Header'

const CartCard = ({ _id, title, price, images }) => {
    const { cartProducts, setCartProducts, addProduct } = useContext(CartContext);
    let quantity = cartProducts.filter(id => id == _id).length; // Filter the array on based of the product Id and get the length of the filtered array

    const increaseQuantity = (id) => {
        addProduct(id); // from CartContext
    }
    const decreaseQuantity = (id) => {
        setCartProducts(prev => {
            const post = prev.indexOf(id); // position of productId in Array of Ids
            let updatedCart = prev.filter((_id, idx) => idx != post); // return all the ids except the Index one
            // console.log(prev, post, updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // save to local storage
            return updatedCart;
        });
    }

    return (
        <StyledCartCard>
            <div><img src={adminHost + images[0]} alt="" /></div>
            <div>
                {/* <p>category</p> */}
                <p className='title'>{title}</p>
                <p>Qty: {quantity}</p>
                <p>Color: Grey</p>
                <Flex>
                    <p className='price'>${quantity * price}</p>
                    <QunatityLabel>
                        <MinusIcon onClick={e => decreaseQuantity(_id)} />
                        <span>{quantity}</span>
                        <PlusIcon onClick={e => increaseQuantity(_id)} />
                    </QunatityLabel>
                </Flex>
            </div>
        </StyledCartCard>
    )
}

export default CartCard