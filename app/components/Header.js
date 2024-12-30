"use client"
import React, { useContext } from 'react'
import { StyledHeader, Logo } from './styles/StyledHeader'
import { CartContext } from './CartContext'
import { StyledLinkSecondary } from './styles/StyledButtons'

export let adminHost = process.env.NEXT_PUBLIC_ADMIN_LOCAL_HOST;

const Header = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext); // get context data
  // console.log(cartProducts);

  return (
    <StyledHeader>
      <Logo className="logo">
        <img width={45} src="/logo.png" alt="" />
        <span>Namjot</span>
      </Logo>
      <nav>
        <StyledLinkSecondary href={"/"}>Home</StyledLinkSecondary>
        <StyledLinkSecondary href={"/products"}>Products</StyledLinkSecondary>
        <StyledLinkSecondary href={"/orders"}>Orders</StyledLinkSecondary>
        <StyledLinkSecondary href={"/cart"}>Cart ({cartProducts?.length || "0"})</StyledLinkSecondary>
      </nav>
    </StyledHeader>
  )
}

export default Header