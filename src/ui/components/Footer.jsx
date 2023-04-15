import styled from "styled-components";

export const Footer = () => {

    const sendEmail = () => {
        window.location.href = "mailto:test@example.com"
    }

    return (
        <FooterContainer>
            <TextContainer>
                <Name>Maria Julieta Fernandez Vidal</Name>
                <EmailIcon src="email.svg" alt="image" onClick={sendEmail}/>
            </TextContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
  background-color: #383838;
  height: 50px;
  @media only screen and (max-width: 800px) {
    height: 100px;
  }
`;

const TextContainer = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 800px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    height: 100px;
    justify-content: space-around;
  }
`;

const Name = styled.span`
  color: #9b9999;
  font-size: 14px;
  text-align: center;
`;

const EmailIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;
