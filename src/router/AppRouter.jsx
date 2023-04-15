import { Route, Routes } from 'react-router-dom';

import { JulietaArtsRoutes } from '../arts';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={ <JulietaArtsRoutes />} />
        </Routes>
    </>
  )
}
