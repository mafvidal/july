import {useEffect, useMemo, useRef, useState} from 'react';
import {Navigate, useLocation, useParams} from 'react-router-dom';
import {getHeroById} from '../helpers';
import styled from "styled-components";
import {heroes} from "../data/heroes";


export const ArtPage = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const { title, description, date, images = []} = state;
    const [index, setIndex] = useState(0);
    const timer = useRef(0);
    const touchStart = useRef(null);
    const touchEnd = useRef(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    }

    const onTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            next();
        } else if (isRightSwipe) {
            prev();
        }
    }

    useEffect(() => {
        if (images && images.length > 0) {
            const l = images.length;
            console.log("Primere imagen " + l)
            timer.current = window.setInterval(() => {
                setIndex(prev => {
                    if (prev < l - 1) {
                        return prev + 1
                    }
                    return 0
                })
            }, 2500);
        }

        return () => {
            if (timer.current !== 0) {
                window.clearInterval(timer.current);
            }
            timer.current = 0;
        };
    }, []);

    const stopTimer = () => {
        if (timer.current !== 0) {
            window.clearInterval(timer.current);
        }
        timer.current = 0;
    }

    const next = () => {
        stopTimer();
        if (index < images.length - 1) {
            setIndex(prev => prev + 1)
        } else {
            setIndex(prev => 0)
        }
    }

    const prev = () => {
        stopTimer();
        if (index > 0) {
            setIndex(prev => prev -1)
        } else {
            setIndex(prev => images.length - 1)
        }
    }

    const renderCarousel = () => {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                <div className="carousel-indicators">
                    {
                        images.map((image, ind) => {
                            return (
                                <button
                                    key={`button-${ind}`}
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    onClick={() => setIndex(ind)}
                                    className={`${index === ind ? "active" : ""}`}
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                            )
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        images.map((image, ind) => {
                            return (
                                <div className={`carousel-item ${index === ind ? "active" : ""}`}>
                                    <Image
                                        key={`item-${ind}`}
                                        src={image.url}
                                        alt={title}
                                        className="animate__animated animate__fadeIn"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="carousel-control-prev" data-bs-slide="prev" onClick={prev} style={{cursor: "pointer"}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </div>
                <div className="carousel-control-next" onClick={next} data-slide="next" style={{cursor: "pointer"}} >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </div>
            </div>
        )
    }

    if (!images || images.length === 0) {
        return <Navigate to="/home"/>
    }

    return (
        <Container>


            { renderCarousel() }

            <TextContainer>
                <Title>{title}</Title>

                {
                    date && (
                        <Date>
                            {date}
                        </Date>
                    )
                }

                {
                    description && (
                        <DescriptionContainer>
                            {
                                description.split('\n').map((des, index) => (
                                    <Description key={index.toString()}>
                                        {des}
                                    </Description>
                                ))
                            }
                        </DescriptionContainer>

                    )
                }


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

const DescriptionContainer = styled.div`
  margin-top: 30px;
`;

const Description = styled.p`
  font-family: didot, serif;
  max-width: 600px;
  text-align: center;
  margin: 0;
`;
