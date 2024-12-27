import React from 'react';
import { Container } from '../styles/Container.styled';
import { Flex } from '../styles/Flex.styled';
import SocialIcons from '../SocialIcons';
import { StyledFooter } from '../styles/StyledFooter.Styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img width='200px' src='./images/logo (1).svg' alt="'logo" />
        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>+34 115 265 789</li>
            <li>consultas@product.com</li>
          </ul>
          <ul>
            <li>Acerca de</li>
            <li>Que hacemos?</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Metas</li>
            <li>Blog</li>
            <li>Contacto</li>
          </ul>

          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
