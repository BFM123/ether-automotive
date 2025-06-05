import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Menu = styled.div`
  a {
    color: #fff;
    margin: 0 20px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #e60000;
    }
  }
`;