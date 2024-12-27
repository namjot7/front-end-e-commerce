import React from 'react'
import { StyledButton, StyledLink } from './styles/StyledButtons';

const Button = ({ children, href, ...rest }) => {

    const renderLink = () => (
        <StyledLink href={href} {...rest}>
            {children}
        </StyledLink>
    )
    const renderButton = () => (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
    return href ? renderLink() : renderButton();
}
export default Button