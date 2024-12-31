import { mobile } from "@/app/assets/responsive";
import { styled } from "styled-components";

export const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 20px 0;
    gap: 15px;

    @media (max-width: ${mobile}){
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`;
export const StyledCard = styled.div`
    background: #282828;
    color: white;
    border-radius: 5px;
    padding: 16px;
    max-width: 240px;
    max-height: 300px;

    img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
        object-fit: cover;
    }
    .card-content{
        font-weight: 500;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
    }
    @media (max-width: ${mobile}){
        max-width: 185px;
        max-height: 250px;
        padding: 10px;
        
        .card-content{
            display: block;
            text-align: center;
            font-size: 16px;
            font-weight: normal;
            
        }
        button{
            display: none;
        }
    }
`;

