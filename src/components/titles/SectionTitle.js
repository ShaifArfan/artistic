import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const SectionStyles = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

function SectionTitle({ children, ...rest }) {
  return <SectionStyles {...rest}>{children}</SectionStyles>;
}

export default SectionTitle;
