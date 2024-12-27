import Link from 'next/link'
import styled from 'styled-components'

// Header, Logo, Headings
export const StyledHeader = styled.header`
  background: #000;
  color: white;
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

export const MainHead = styled.h2`
  font-size: 30px;
  font-weight:600;
`;
export const SecondaryHead = styled.h4`
  font-size: 25px;
  font-weight: 500;
  margin-bottom:10px;
`;

