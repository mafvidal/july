import {useMemo, useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {getHeroById} from '../helpers';
import styled from "styled-components";
import {heroes} from "../data/heroes";


export const ArtPage = () => {

    const {id} = useParams();
    const [index, setIndex] = useState(0)

    const hero = useMemo(() => getHeroById(id), [id]);

    if (!hero) {
        return <Navigate to="/home"/>
    }

    const renderCarousel = () => {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        heroes.map((elem, ind) => {
                            return (
                                <button type="button" data-bs-target="#carouselExampleIndicators" onClick={() => setIndex(ind)}
                                        className={`${index === ind ? "active" : ""}`} aria-current="true" aria-label="Slide 1" />
                            )
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        heroes.map((hero, ind) => {
                            return (
                                <div className={`carousel-item ${index === ind ? "active" : ""}`}>
                                    <Image
                                        src={`heroes/${hero.id}.jpg`}
                                        alt={hero.superhero}
                                        className="animate__animated animate__fadeIn"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="carousel-control-prev" data-bs-slide="prev" onClick={prev} style={{padding: "20px", cursor: "pointer"}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </div>
                <div className="carousel-control-next" onClick={next} data-slide="next"  style={{padding: "20px", cursor: "pointer"}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </div>
            </div>
        )
    }

    const next = () => {
        if (index < heroes.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    const prev = () => {
        if (index > 0) {
            setIndex(index -1)
        } else {
            setIndex(heroes.length - 1)
        }
    }

    return (
        <Container>


            { renderCarousel() }

            <Image
                src={`heroes/${id}.jpg`}
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
