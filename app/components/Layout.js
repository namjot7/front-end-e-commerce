"use client"
import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            {children}
        </>
    )
}

export default Layout