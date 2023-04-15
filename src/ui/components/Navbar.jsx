import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import {useState} from "react";

export const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);

    const onNavigate = () => {
        setExtendNavbar(false);
    }

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/"> Inicio</NavbarLink>
                    <NavbarLink to="/esculturas"> Esculturas</NavbarLink>
                    <NavbarLink to="/pinturas"> Pinturas</NavbarLink>
                    <NavbarLink to="/murales"> Murales</NavbarLink>
                    <NavbarLink to="/bio"> Bio</NavbarLink>
                    <OpenLinksButton
                        onClick={() => {
                            setExtendNavbar((curr) => !curr);
                        }}
                    >
                        {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </OpenLinksButton>
                </NavbarLinkContainer>
            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/" onClick={onNavigate}> Inicio</NavbarLinkExtended>
                    <NavbarLinkExtended to="/esculturas" onClick={onNavigate}> Esculturas</NavbarLinkExtended>
                    <NavbarLinkExtended to="/pinturas" onClick={onNavigate}> Pinturas</NavbarLinkExtended>
                    <NavbarLinkExtended to="/murales" onClick={onNavigate}> Murales</NavbarLinkExtended>
                    <NavbarLinkExtended to="/bio" onClick={onNavigate}> Bio</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}


export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled(NavLink)`
  color: #808080a8;
  font-size: 20px;
  font-family: cinzel, serif;
  text-decoration: ${(props) => {
    return props.style ? (isActive) => (isActive ? "none" : "none") : "none";
  }};
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    text-decoration: none;
    color: black;
  }
  &[aria-current] {
    color: black;
    font-weight: 500;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: #808080a8;
  font-size: 20px;
  font-family: cinzel, serif;
  text-decoration: ${(props) => {
    return props.style ? (isActive) => (isActive ? "none" : "none") : "none";
  }};
  margin: 10px;
  &:hover {
    text-decoration: none;
    color: black;
  }
  &[aria-current] {
    color: black;
    font-weight: 500;
  }
`;

// export const Logo = styled.img`
//   margin: 10px;
//   max-width: 180px;
//   height: auto;
// `;

export const OpenLinksButton = styled.button`
  width: 70px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
