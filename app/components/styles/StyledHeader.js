import { mobile } from '@/app/assets/responsive';
import Link from 'next/link';
import styled from 'styled-components'

// Header, Logo, Headings
export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  background: #000;
  color: white;
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border-bottom: 1px solid #383838;

  button{
	  cursor: pointer;
      background: transparent;
      color: white;
      border: none;
    }
	button .bars{
		display: none;
	}
  
  @media (max-width: ${mobile}){
    flex-direction: column;
    button .bars{
      display: block;
    }
  }
`;
export const MobileNavCart = styled.div`
	display: none;
    .cart-box{
		padding-right: 20px;
	}
	span{
		position: absolute;
		top: -13px;
		padding: 0px 7px;
		right: 0px;
		background: white;
		font-size: 15px;
		color: black;
		border-radius: 100%;
	}
	@media (max-width: ${mobile}){
		display: block;
	}
`;
export const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  font-weight: 600;

  img{
    width: 45px;
  }
  
`;
export const StyledNav = styled.nav`

  @media (max-width: ${mobile}){
    ${props => props.shownav == 1
    ? `display:flex; overflow-y:hidden;` : 'display:none;'}
    flex-direction: column;
    gap: 55px;
    height: 90vh;
    padding-top:100px;
    a{
      font-size: 28px;
    }
  }
`;
export const MainHead = styled.h2`
  font-size: 30px;
  font-weight:600;
`;
export const SecondaryHead = styled.h4`
  font-size: 25px;
  font-weight: 500;
  margin-bottom:10px;
`;

