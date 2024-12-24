import styled from 'styled-components'

export const StyledHero = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    display: flex;
    /* flex-wrap: wrap-reverse; */
    align-items: center;
    gap: 70px;
    width: 80vw;
    margin: auto;
    padding: 30px;
    padding-top: 100px;
    background: #000;

    h2{
        margin-bottom: 20px;
        font-size: 50px;
        transition: 4 all ease-in-out;
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
            0 0 5px rgb(255, 160, 149),
            0 0 10px rgb(255, 160, 149),
            0 0 30px rgb(255, 160, 149),
            0 0 50px rgb(255, 160, 149),
            0 0 80px rgb(255, 160, 149);
        }
    }
    p{
        color:rgb(174, 174, 174);
        font-size: 20px;
        margin-top: 10px;
    }
    img{
        width: 90%;
        font-size: 80px;
        
    }
    
`