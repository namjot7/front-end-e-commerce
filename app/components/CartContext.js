"use client"
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    let LS = typeof window !== "undefined" ? window.localStorage : null;

    // Get products from Local storage when page is loaded
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
    const clearCart = () => {
        setShowSuccess(true); // show text
        setCartProducts([]); // remove from the Cart context Array
        localStorage.removeItem('cart'); // delete from Local Storage
    }

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, clearCart, showSuccess }}>
            {children}
        </CartContext.Provider>
    )
}