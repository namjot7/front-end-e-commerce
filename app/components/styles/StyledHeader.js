import Link from 'next/link'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  background: #000;
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border-bottom: 1px solid #383838;
  `;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  font-weight: 600;
  `;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color:rgb(159, 159, 159);
  text-decoration: none;
  margin: 0 10px;
  transition: .19s all;
  
  &:hover{
    color: #fff;
  }
`;