import React from 'react';
import { StyledCard } from '../styles/StyledCard.styled';

const Card = ({ title, body, image }) => {
  return (
    <StyledCard>
      <div>
        <h2> {title} </h2>
        <p> {body} </p>
      </div>
      <div>
        <img src={`./images/${image}`} alt='card-description' />
      </div>
    </StyledCard>
  );
};

export default Card;
