import styled from "styled-components";

export const HomePage = () => {
    return (
        <HomeContainer>
            <Tile>Julieta Arts</Tile>

            <ImgContainer src="/assets/intro.png" alt="intro" />

            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.img`
  max-height: 90vh;
  width: fit-content;
  max-width: calc(100vw - 50px);
`;

const Tile = styled.h1`
  font-family: trebuchet ms, serif;
  margin-bottom: 30px;
`;

const Text = styled.p`
  margin-top: 30px;
  font-family: didot, serif;
  max-width: 600px;
  text-align: center;
  padding: 0 10px;
`;
