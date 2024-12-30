import { styled } from "styled-components";

export const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 20px 0;
    gap: 15px;
`;
export const StyledCard = styled.div`
    /* background-color: white;
    color: black; */
    background: #282828;
    color: white;
    border-radius: 12px;
    padding: 16px;
    max-width: 240px;
    max-height: 300px;

    img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 12px;
        object-fit: cover;
    }
    .card-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        /* padding: 0 4px; */
    }
   
    h4{
        font-weight: 500;
        font-size: 20px;
        /* text-transform: capitalize; */
    }
    span{
        font-size: 18px;
        font-weight: 500;
    }
`;

