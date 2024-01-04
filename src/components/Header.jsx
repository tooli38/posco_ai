import React from 'react';
import styled from 'styled-components';

function Header(props) {
  const StyledHeader = styled.header`
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #ddd;
    box-sizing: border-box;
  `;

  const StyleDiv = styled.div`
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const StyleLogo = styled.a`
    font-size: 28px;
    font-weight: bold;
    color: #333;
  `;
  return (
    <StyledHeader>
      <StyleDiv>
        <StyleLogo href='/'>LOGO</StyleLogo>
        <p>유저네임</p>
      </StyleDiv>
    </StyledHeader>
  );
}

export default Header;
