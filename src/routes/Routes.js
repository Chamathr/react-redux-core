import { React, lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

const ProjectRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback="Loading...">
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback="Loading...">
              <About />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default ProjectRoutes;