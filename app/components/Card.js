import React, { useContext, useEffect } from 'react'
import { StyledCard } from './styles/StyledProductsGrid';
import { CartContext } from './CartContext';
import { ButtonOutlined } from './styles/StyledButtons';
import { CartIcon } from '../assets/buttons';
import { adminHost } from './Header';


const Card = ({ _id, title, price, images, cartBtn }) => {

    // console.log(adminHost);
    const { addProduct } = useContext(CartContext); // get context data

    return (
        <StyledCard>
            <a href={"/products/" + _id}>
                <img src={adminHost + images[0]} alt="product image" />
            </a>
            <div className='card-content'>
                <div>
                    <div>{title}</div>
                    <div>${price}</div>
                </div>
                <ButtonOutlined onClick={() => addProduct(_id)}>
                    <CartIcon />
                </ButtonOutlined>
            </div>
        </StyledCard>
    )
}
export default Card;