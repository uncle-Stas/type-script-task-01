import React, { ReactNode } from 'react';
import { Container, SectionStyled, Title } from './Section.styled';

interface IProps {
  children: ReactNode;
  title: string;
}

export const Section: React.FC<IProps> = ({ children, title }) => {
  return (
    <SectionStyled>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionStyled>
  );
};
