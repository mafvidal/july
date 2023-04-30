import {useEffect, useMemo, useState} from 'react';
import { ArtCard } from './';
import styled from "styled-components";
import {coreApi} from "../../api/CoreApi";

export const ArtList = ({ category = "bocetos" }) => {

    const [arts, setArts] = useState([]);

    const getImages = async () => {
        const result = await coreApi.get('/art/all', {
            params: {
                category
            }
        });
        setArts(result.data.data.arts);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <Container>
            {
                arts.map( art => (
                    <ArtCard
                        key={ art._id }
                        { ...art }
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
