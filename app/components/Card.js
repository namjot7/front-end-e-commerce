import React, { useContext, useEffect } from 'react'
import { StyledCard } from './styles/StyledProductsGrid';
import { CartContext } from './CartContext';
import { ButtonOutlined } from './styles/StyledButtons';
import { CartIcon } from '../assets/buttons';


const Card = ({ _id, title, price, images, cartBtn }) => {

    let localhost = "http://localhost:3001/";
    const { addProduct } = useContext(CartContext); // get context data

    return (
        <StyledCard>
            <div><img src={localhost + images[0]} alt="product image" /></div>
            <div className='card-content'>
                <div>
                    <h4>{title}</h4>
                    <span>${price}</span>
                </div>
                {/* {cartBtn && ( */}
                <ButtonOutlined onClick={() => addProduct(_id)}>
                    <CartIcon />
                </ButtonOutlined>
                {/* )} */}
            </div>
        </StyledCard>
    )
}
export default Card;