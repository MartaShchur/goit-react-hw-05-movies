import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavList, Navigation } from './Layout.styled';

export const Layout = () => {
   return (
    <Container>
      <header>
        <Navigation>
          <NavList>
              <Link to="/">
                Home
              </Link>
              <Link to="/movies">
                Movies
              </Link>
          </NavList>
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};