import { Spinner } from '@chakra-ui/react';

export const DefaultSpinner = () => {
  return (
    <Spinner
      size="lg"
      color="teal"
      thickness="4px"
      speed="0.6s"
      emptyColor="gray.200"
    />
  );
};
