import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </MainLayout>
  );
};

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    children: [{}],
  },
];
