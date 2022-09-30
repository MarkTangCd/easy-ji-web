import { NextPage } from 'next';
import { Box, Center } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout: NextPage = () => {
  return (
    <Box>
      <Header />
      <Center>
        Layout
      </Center>
      <Footer />
    </Box>
  )
}

export default Layout;