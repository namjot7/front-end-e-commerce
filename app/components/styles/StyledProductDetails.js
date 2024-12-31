import { mobile } from "@/app/assets/responsive";
import styled from "styled-components";

export const StyledProductDetails = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px 0;
    
    img{
        border-radius: 8px;
        margin-right: 7px;
        margin-bottom: 11px;
    }
    @media (max-width: ${mobile}){
        flex-direction: column-reverse;
    }
`;
export const HeroImage = styled.img`
    max-width: 280px;
    max-height: 280px;
`;
export const MiniImagesBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: ${mobile}){
        flex-direction: row;
    }
`;
export const MiniImages = styled.img`
    ${props => props.active == 1 ?
        "border: 3.5px solid #F09440;" : "border: 3.5px solid transparent;"}
    cursor: pointer;
    width: 90px;
    padding: 5px;
    background: white;
    transition: all .15s;

`;
export const ProductInfo = styled.div`
    .desc{
        margin: 10px 0;
        color:rgb(199, 199, 199);
    }
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 9px;
        padding: 1px 10px;
    }
`;