import { useMemo } from 'react';
import { ArtCard } from './';
import { getHeroesByPublisher } from '../helpers';
import styled from "styled-components";

export const ArtList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <Container>
            {
                heroes.map( hero => (
                    <ArtCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 30% 30% 30%;
  justify-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 1090px) {
    grid-template-columns: 45% 45%;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 95%;
  }
`;
