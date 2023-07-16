import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { AppProvider } from './providers/app/appProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <AppProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <AppRoutes />
          </ChakraProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </AppProvider>
  );
}

export default App;
