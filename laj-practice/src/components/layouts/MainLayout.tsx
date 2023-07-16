import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Header, SideMenu } from '../navigation';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"`}
      gridTemplateRows={'60px 1fr'}
      gridTemplateColumns={'240px 1fr'}
      w="100%"
      minHeight="100vh"
      bg="white"
    >
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'nav'}>
        <SideMenu />
      </GridItem>
      <GridItem area={'main'}>{children}</GridItem>
    </Grid>
  );
};
