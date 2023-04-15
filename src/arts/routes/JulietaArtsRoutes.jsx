import { Navigate, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import {Footer, Navbar} from '../../ui';
import { PaintingsPage, ArtPage, SculpturesPage, MuralsPage, HomePage, BioPage, ContactPage } from '../pages';

export const JulietaArtsRoutes = () => {
    return (
        <>
            <Navbar />
            <GeneralContainer>
                <RoutesContainer>
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="esculturas" element={<SculpturesPage />} />
                        <Route path="pinturas" element={<PaintingsPage />} />
                        <Route path="murales" element={<MuralsPage />} />
                        <Route path="bio" element={<BioPage />} />
                        <Route path="contactame" element={<ContactPage />} />
                        <Route path="obra/:id" element={<ArtPage />} />
                        <Route path="/" element={<Navigate to="/" />} />
                    </Routes>
                </RoutesContainer>
            </GeneralContainer>
            <Footer />
        </>
    )
}


const GeneralContainer = styled.div`
  background-color: #faf8f5;
  padding: 90px 0 25px;
  min-height: calc(100vh - 50px);
  @media only screen and (max-width: 800px) {
    min-height: calc(100vh - 100px);
  }
`;

const RoutesContainer = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`;
