import { Suspense } from 'react';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={true} />
      </main>
    </Container>
  );
};
