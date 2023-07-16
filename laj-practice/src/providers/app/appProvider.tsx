import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { DefaultSpinner } from '../../components/elements/spinner';

const ErrorFallback = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg text-red-500 font-semibold">
        エラーが発生しました{' '}
      </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        ホーム
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <VStack
          spacing={8}
          m="auto"
          justifyContent="center"
          alignItems="center"
        >
          <DefaultSpinner />
        </VStack>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>{children}</Router>
      </ErrorBoundary>
    </React.Suspense>
  );
};
