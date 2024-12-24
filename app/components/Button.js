import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
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
`

const Button = ({ children, ...rest }) => {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    )
}

export default Button