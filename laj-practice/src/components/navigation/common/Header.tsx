import {
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Flex boxSizing={'content-box'} borderBottom={'1px solid #E2E8F0'}>
      <Center ml={'24px'}>
        <Link to="/servers">
          <Text
            fontSize={'24px'}
            color={'black'}
            fontWeight={600}
            lineHeight={'150%'}
          >
            Zabbix管理システム
          </Text>
        </Link>
      </Center>
      <Spacer />
      <Center mr={'24px'}>
        <Menu>
          <MenuButton h={'60px'}>アカウント設定</MenuButton>
          <MenuList
            borderRadius={10}
            border={'1px solid #E2E8F0'}
            boxShadow={'0px 1px 2px rgba(0, 0, 0, 0.3)'}
          >
            <MenuItem>
              <Text fontWeight={500}>パスワード変更</Text>
            </MenuItem>
            <MenuItem>
              <Text fontWeight={500}>ログアウト</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};
