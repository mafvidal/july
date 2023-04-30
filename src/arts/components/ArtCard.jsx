import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import {useState} from "react";

const CharactersByHero = ({ alter_ego, characters}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}


export const ArtCard = ({
    _id,
    title,
    principal,
    category,
    date,
    description,
    images
}) => {
    const navigate = useNavigate();
    const [mouseOver, setMouseOver] = useState(false);

    const onNavigateToArt = () => {
        navigate(`/obra/${ _id }`, {state: {title, description, date, images}});
    }

    const renderArt = () => {
        return <Image src={ principal }  alt={ title } />;
    }

    const renderDescription = () => {
        return (
            <DescriptionContainer>
                <Title>
                    {title}
                </Title>
            </DescriptionContainer>
        );
    }

    return (
        <Container
            className="animate__animated animate__fadeIn"
            onClick={onNavigateToArt}
        >

            <div
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
                style={{width: "100%", height: "100%"}}
            >
                {
                    !mouseOver
                        ? renderArt()
                        : renderDescription()
                }
            </div>

        </Container>
    )
}

const Container = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #1a1a1a;
  cursor: pointer;
`;

const Title = styled.span`
  font-family: cinzel, serif;
  color: white;
`;
