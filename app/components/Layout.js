import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            {children}
        </div>
    )
}

export default Layout