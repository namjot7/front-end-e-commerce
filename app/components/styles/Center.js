import { mobile } from "@/app/assets/responsive";
import styled from "styled-components";

export const Center = styled.div`
    width: 90vw;
    margin: auto;
    padding: 40px 10px;

    @media (max-width: ${mobile}){
        /* text-align: center; */
    }
`;
export const Flex = styled.div`
    @media (max-width: ${mobile}){
		width: 100%;
	}
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;
export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: relative;
`;
