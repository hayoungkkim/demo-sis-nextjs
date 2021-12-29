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
import { LogoIcon } from '../icons'

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
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
        <LogoIcon display={{ base: 'none', md: 'flex' }} icon="logo_ssg" height={14} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex mx="6" mb="4">
        <Text fontSize="2xl" fontWeight="bold">
          <Text as="span" color="purple.800">
            User
          </Text>
          님의
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
    <Stack spacing={0}>
      <Link href={href ?? '#'} passHref>
        <Flex
          px="4"
          py="2"
          as={ChakraLink}
          justify="space-between"
          align="center"
          _hover={{
            textDecoration: 'none'
          }}
          onClick={children && onToggle}>
          <Text color="gray.900">{label}</Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
              w="6"
              h="6"
            />
          )}
        </Flex>
      </Link>

      <Collapse in={isOpen} animateOpacity={false}>
        <Stack spacing={0} bg="gray.200" color="gray.700">
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href} passHref>
                <ChakraLink px="4" py="2">
                  {child.label}
                </ChakraLink>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export default Sidebar
