import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

type SideNavigationItem = {
  name: string;
  path: string;
};

export const SideMenu = () => {
  const navItems: SideNavigationItem[] = [
    {
      name: 'ZABBIXサーバ一覧',
      path: '/servers',
    },
    {
      name: 'メンテナンス設定',
      path: '/maintenances',
    },
    {
      name: 'ホスト一覧',
      path: '/hosts',
    },
    {
      name: 'グループ一覧',
      path: '/groups',
    },
    {
      name: 'テンプレート一覧',
      path: '/templates',
    },
    {
      name: 'アカウント一覧',
      path: '/users',
    },
  ];

  const navLinks = navItems.map((item, index) => {
    return (
      <NavLink end={index === 0} key={item.name} to={item.path}>
        <Box
          as="button"
          w="100%"
          boxSizing="border-box"
          p="24px 20px 24px 24px"
          _hover={{ bg: '#E2E8F0', color: '#2C5282' }}
        >
          <Text
            fontSize="16px"
            fontWeight="600"
            line-height="24px"
            align="left"
          >
            {item.name}
          </Text>
        </Box>
      </NavLink>
    );
  });

  return (
    <Box h="100%" bgColor="blue.700" color="white">
      <Box boxSizing="border-box">{navLinks}</Box>
    </Box>
  );
};
