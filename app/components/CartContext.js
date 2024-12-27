"use client"
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([]);
    let LS = typeof window !== "undefined" ? window.localStorage : null;

    // useEffect(() => {
    //     if (cartProducts?.length > 0) {
    //         LS.setItem('cart', JSON.stringify(cartProducts)); // save to local storage
    //         // set
    //     }
    // }, [cartProducts])

    // Get products from Locat storage when page is loaded
    useEffect(() => {
        if (LS && LS.getItem('cart')) {
            setCartProducts(JSON.parse(LS.getItem('cart')))
        }
    }, [])

    const addProduct = (id) => {
        setCartProducts(prev => {
            let newCart = [...prev, id]; // add product id to the rest of the cart
            LS.setItem('cart', JSON.stringify(newCart)); // save to local storage
            return newCart;
        });
    }
    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>
            {children}
        </CartContext.Provider>
    )
}