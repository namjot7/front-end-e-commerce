import styled, { css } from 'styled-components'
import Link from 'next/link';

// Links, simple button, Cart button (ouline only), Button with no background,

// common properties
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
    ${props => props.size == "large" && css`
        font-size: 18px;
    `}
`;
export const StyledButton = styled.button`
    ${ButtonCss}
`;
export const ButtonOutlined = styled.button`
    ${ButtonCss}
    display: inline-block;
    border: 2px solid white;
    padding: 3px 7px;
    background: transparent;
    border-radius: 7px;

    
`;
export const CheckoutButton = styled.button`
    ${ButtonCss}
    width: 100%;
    display: block;
    background: #7047eb;
    border-radius: 5px;
    padding: 10px 15px;
    transition: all 0.12s;

    &:hover{
        background:rgb(95, 44, 246);
    }
`;

// Links
export const StyledLink = styled(Link)`
    /* background-color: skyblue; */
    ${ButtonCss}
    text-decoration: none;
`;
export const StyledLinkSecondary = styled(Link)`
    display: inline-block;
    font-size: 20px;
    color:rgb(159, 159, 159);
    text-decoration: none;
    margin: 0 10px;
    transition: .19s all;
    
    &:hover{
        color: #fff;
    }
`;
