import {useMemo} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {getHeroById} from '../helpers';
import styled from "styled-components";


export const ArtPage = () => {

    const {id} = useParams();

    const hero = useMemo(() => getHeroById(id), [id]);

    if (!hero) {
        return <Navigate to="/home"/>
    }

    return (
        <Container>
            <Image
                src={`/assets/heroes/${id}.jpg`}
                alt={hero.superhero}
                className="animate__animated animate__fadeIn"
            />
            <TextContainer>
                <Title>{hero.superhero}</Title>
                {/*<ul className="list-group list-group-flush">*/}
                {/*  <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>*/}
                {/*  <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>*/}
                {/*  <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>*/}
                {/*</ul>*/}

                <Date>2023</Date>

                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
                {/*<p>{ hero.characters }</p>*/}

            </TextContainer>

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-height: 90vh;
  width: fit-content;
  max-width: calc(100vw - 50px);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 10px;
`;

const Title = styled.h3`
  font-family: trebuchet ms, serif;
`;

const Date = styled.span`
  font-family: palatino, serif;
  color: #3f3d3d;
`;

const Description = styled.p`
  margin-top: 30px;
  font-family: didot, serif;
  max-width: 600px;
  text-align: center;
`;
