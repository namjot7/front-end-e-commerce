"use client"
import React from 'react'
import { StyledHeader, Logo, StyledLink } from './styles/StyledHeader'

const Header = () => {
  return (
    <StyledHeader>
      <Logo className="logo">
        <img width={45} src="/logo.png" alt="" />
        <span>Namjot</span>
      </Logo>
      <nav>
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={"/products"}>Products</StyledLink>
        <StyledLink href={"/orders"}>Orders</StyledLink>
        <StyledLink href={"/cart"}>Cart (0)</StyledLink>
      </nav>
    </StyledHeader>
  )
}

export default Header