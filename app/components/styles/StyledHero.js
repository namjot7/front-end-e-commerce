import { mobile } from '@/app/assets/responsive';
import styled from 'styled-components'

const StyledHero = styled.div`
    height: 80vh;
    background: #000;
    color: white;
    display: flex;
    align-items: center;
    gap: 70px;
    margin-bottom: 50px;

    h2{
        margin-bottom: 20px;
        font-size: 50px;
        transition: 4s all ease-in-out;
        text-shadow: 
            0 0 5px rgb(250, 139, 120),
            0 0 10px rgb(250, 139, 120),
            0 0 20px rgb(250, 139, 120),
            0 0 40px rgb(250, 139, 120),
            0 0 80px rgb(250, 139, 120);
        animation: neon-glow 4s infinite;
    }
    @keyframes neon-glow {
        0% {
            text-shadow: 
            0 0 5px rgb(250, 139, 120),
            0 0 10px rgb(250, 139, 120),
            0 0 20px rgb(250, 139, 120),
            0 0 40px rgb(250, 139, 120),
            0 0 80px rgb(250, 139, 120);
        }
        100% {
            text-shadow: 
            0 0 5px rgb(255, 66, 66),
            0 0 10px rgb(255, 66, 66),
            0 0 30px rgb(255, 66, 66),
            0 0 50px rgb(255, 66, 66),
            0 0 80px rgb(255, 66, 66);
        }
    }
    p{
        color:rgb(174, 174, 174);
        font-size: 20px;
        margin-top: 10px;
    }
    img{
        width: 80%;
    }  
    @media (max-width: ${mobile}){
        flex-direction: column-reverse;
        text-align: center;
        margin-bottom: 0px;

        p{
            font-size: 18px;
            margin-top: 0px;
        }
        img{
            width: 100%;
        }
    } 
`;
export default StyledHero;