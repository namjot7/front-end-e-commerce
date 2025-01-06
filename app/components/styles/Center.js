import { mobile } from "@/app/assets/responsive";
import styled from "styled-components";

export const Center = styled.div`
    width: 90vw;
    margin: auto;
    padding: 40px 10px;
`;
export const FlexBetween = styled.div`
    @media (max-width: ${mobile}){
		width: 100%;
	}
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;
export const FlexCenter = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;
