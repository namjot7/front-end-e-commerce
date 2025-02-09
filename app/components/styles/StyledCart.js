import { mobile } from '@/app/assets/responsive';
import styled from 'styled-components'

// Main cart container, products card, quantity container,

export const StyledCartContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 30px;
    gap: 20px;

    /* Immediate second div */
    /* >div:nth-child(2){
        padding: 15px 20px;
    } */
    @media (max-width: ${mobile}){
        grid-template-columns: 1fr;
        
    }

`;
export const StyledCartCard = styled.div`
    display: flex;
    gap: 15px;
    font-size: 18px;
    background-color: #383838;
    padding: 15px 20px;
    margin-bottom: 20px;
    border-radius: 9px;

    >div:nth-child(2){
        width: 100%;
    }
    img{
        width: 115px;
        border-radius: 9px;
    }
    svg{
        cursor: pointer;
    }
`;
export const QunatityLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`;
export const EmptyCart = styled.div`
    height: 77vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 300px;
        margin-bottom: 30px;
    }
    span{
        color: #FF0000;
    }
`;
export const PaymentSuccess = styled.div`
    height: 70vh;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    animation: fade-out 1s ;
`;

