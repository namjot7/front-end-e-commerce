"use client"
import React, { useContext, useEffect, useState } from 'react'
import { StyledHeader, Logo, StyledNav, HeaderActions, CartLength, MobileNavCart } from './styles/StyledHeader'
import { CartContext } from './CartContext'
import { StyledLinkSecondary } from './styles/StyledButtons'
import { CartIcon, HamburgerIcon } from '../assets/buttons'
import { FlexBetween, FlexCenter } from './styles/Center'

export let adminHost = process.env.NEXT_PUBLIC_ADMIN_LOCAL_HOST;

const Header = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext); // get context data
  // console.log(cartProducts);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    console.log(showNav);
  }, [showNav])

  return (
    <StyledHeader>
      <FlexBetween>
        <HamburgerIcon
          onClick={() => setShowNav(!showNav)} className="bars" />
        <Logo href={"/"} className="logo" onClick={e => setShowNav(false)}>
          <img src="/logo.png" alt="" />
          <span>Namjot</span>
        </Logo>

        <MobileNavCart>
          <StyledLinkSecondary href={"/cart"} onClick={e => setShowNav(false)}>
            <FlexCenter className='cart-box'>
              <CartIcon />
              <span>{cartProducts?.length || "0"}</span>
            </FlexCenter>
          </StyledLinkSecondary>
        </MobileNavCart>
      </FlexBetween>

      <StyledNav shownav={showNav ? 1 : 0}>
        <StyledLinkSecondary href={"/"}
          onClick={e => setShowNav(false)}>Home</StyledLinkSecondary>
        <StyledLinkSecondary href={"/products"}
          onClick={e => setShowNav(false)}>Products</StyledLinkSecondary>
        <StyledLinkSecondary href={"/cart"}
          onClick={e => setShowNav(false)}>Cart ({cartProducts?.length || "0"})</StyledLinkSecondary>
      </StyledNav>
    </StyledHeader >
  )
}

export default Header