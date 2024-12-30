import Image from "next/image";
import styled from "styled-components";
import css from "styled-jsx/css";

export const StyledProductDetails = styled.div`
    display: flex;
    /* align-items: center; */
    gap: 20px;
    padding: 20px 0;
    
    img{
        border-radius: 8px;
        margin-right: 7px;
        margin-bottom: 11px;
    }
`;
export const HeroImage = styled.img`
    max-width: 280px;
    max-height: 280px;
`;
export const MiniImagesBox = styled.div`
    display: flex;
    flex-direction: column;
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