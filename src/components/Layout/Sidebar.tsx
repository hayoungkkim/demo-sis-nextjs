import Link from 'next/link'
import {
  Box,
  BoxProps,
  CloseButton,
  Collapse,
  Flex,
  Icon,
  Link as ChakraLink,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface NavItem {
  label: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: '메뉴1',
    children: [
      {
        label: '메뉴1-1',
        href: '#'
      },
      {
        label: '메뉴1-2',
        href: '#'
      }
    ]
  },
  {
    label: '메뉴2',
    children: [
      {
        label: '메뉴2-1',
        href: '#'
      },
      {
        label: '메뉴2-2',
        href: '#'
      }
    ]
  },
  {
    label: '메뉴3',
    href: '#'
  },
  {
    label: '메뉴4',
    href: '#'
  }
]

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
        <Text display={{ base: 'none', md: 'flex' }} fontSize="2xl" fontWeight="bold">
          SSG.COM
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex mx="6" mb="4">
        <Text fontSize="2xl" fontWeight="bold">
          User님의
          <br />
          SIS 오피스
        </Text>
      </Flex>
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label} {...navItem} />
      ))}
    </Box>
  )
}

const NavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        px={4}
        as={ChakraLink}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}>
        <Text color="gray.900">{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          spacing={0}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor="gray.100"
          bg="gray.200"
          color="gray.700"
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href} passHref>
                <ChakraLink py={2}>{child.label}</ChakraLink>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export default Sidebar
