import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphTexts/ParagraphText';

const ServiceItemStyles = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 12px;
  .service__icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    background-color: var(--mediumSlateBlue);
    width: fit-content;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--white);
    svg {
      width: 60%;
    }
  }
  .service__title {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  &:hover {
    background-color: var(--mediumSlateBlue);
    .service__icon {
      background-color: var(--lightBlue_1);
      color: var(--mediumSlateBlue);
    }
    .service__title {
      color: var(--lightBlue_1);
    }
    .service__desc {
      color: var(--lightBlue_1);
    }
  }
  @media only screen and (max-width: 768px) {
    background-color: var(--mediumSlateBlue);
    .service__icon {
      background-color: var(--lightBlue_1);
      color: var(--mediumSlateBlue);
    }
    .service__title {
      color: var(--lightBlue_1);
    }
    .service__desc {
      color: var(--lightBlue_1);
    }
    .service__title {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }
`;

function ServiceItem({ icon, title, desc }) {
  return (
    <ServiceItemStyles>
      <div className="service__icon">{icon}</div>
      <div className="service__title">{title}</div>
      <ParagraphText className="service__desc">{desc}</ParagraphText>
    </ServiceItemStyles>
  );
}

export default ServiceItem;
