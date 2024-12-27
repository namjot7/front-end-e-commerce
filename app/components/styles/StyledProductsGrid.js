import { styled } from "styled-components";

const StyledProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* display: grid; */
    /* justify-content: space-around; */
    /* grid-template-columns: repeat(2,1fr); */
    margin: 20px 0;
    gap: 30px;

    /* @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    } */
`;
export const StyledCard = styled.div`
    /* background-color: white;
    color: black; */
    background: #282828;
    color: white;

    border-radius: 12px;
    padding: 16px;
    width: 230px;
    /* height: 300px; */

    .card-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        /* padding: 0 4px; */
    }
    /* .card-content div{
        padding: 10px 0;
    } */
    img{
        width: 100%;
        height: 12rem;
        border-radius: 12px;
        object-fit: cover;
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
export default StyledProductsGrid;
