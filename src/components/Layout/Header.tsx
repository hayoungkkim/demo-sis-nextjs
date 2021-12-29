import { Flex, FlexProps, HStack, IconButton } from '@chakra-ui/react'
import { FiBell, FiMenu } from 'react-icons/fi'
import { LogoIcon } from '../icons'

interface HeaderProps extends FlexProps {
  onOpen: () => void
}

const Header = ({ onOpen, ...rest }: HeaderProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="gray.200"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <LogoIcon display={{ base: 'flex', md: 'none' }} icon="logo_ssg" height="14" />

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          size="lg"
          onClick={onOpen}
          variant="ghost"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </HStack>
    </Flex>
  )
}

export default Header
