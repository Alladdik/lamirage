import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  margin-right: 20px;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImage src="/logo.PNG" alt="Logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;