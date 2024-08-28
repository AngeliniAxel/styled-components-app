import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
`;
