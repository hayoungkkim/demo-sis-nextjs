import { ReactNode, useEffect } from 'react'
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react'

import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (isLargerThan768 && isOpen) onClose()
  }, [isLargerThan768])

  return (
    <Box minH="100vh" bg="gray.200">
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerOverlay bg="whiteAlpha.800" />
        <DrawerContent boxShadow="xl">
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
