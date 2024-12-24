import Link from 'next/link';
import React from 'react'
import styled, { css } from 'styled-components'

const ButtonCss = css`
    display: inline-block;
    cursor: pointer;
    color: white;
    font-size: 16px;
    margin-top: 10px;
    padding: 11px 20px;
    outline: none;
    border: none;
    border-radius: 45px;

    ${props => props.primary && css`
        background-color: #006edb;
        &:hover{
            background-color: #1282f1;
        }
    `}
    ${props => props.size == "l" && css`
        font-size: 18px;
    `}
`;
const StyledButton = styled.button`
    ${ButtonCss}
`;
const StyledLink = styled(Link)`
    background-color: skyblue;
    ${ButtonCss}
    text-decoration: none;
`;

const Button = ({ children, href, ...rest }) => {

    const renderLink = () => (
        <StyledLink href={href} {...rest}>{children}</StyledLink>
    )
    const renderButton = () => (
        <StyledButton {...rest}>{children}</StyledButton>
    )
    return href ? renderLink() : renderButton();
}

export default Button