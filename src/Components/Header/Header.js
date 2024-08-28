import React from 'react';
import { Container } from '../styles/Container.styled';
import { Image, Logo, Nav, StyledHeader } from '../styles/Header.styled';
import { Button } from '../styles/Button.styled';
import { Flex } from '../styles/Flex.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo (1).svg' alt='logo' />
          <Button>Try it for free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              debitis praesentium eius earum quidem quia eum minus quibusdam
              aspernatur unde deserunt in, tempore recusandae reprehenderit quam
              perspiciatis voluptatem quo sapiente.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get started for free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
