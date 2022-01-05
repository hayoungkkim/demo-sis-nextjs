import { Box, Text, Flex, Stack, Link } from '@chakra-ui/react'
import { LogoIcon } from '../icons'

interface FootItem {
  idx: number
  name?: string
  info: string
}

const FOOTER_ITEMS: Array<FootItem> = [
  {
    idx: 1,
    name: '대표자',
    info: '강희석'
  },
  {
    idx: 2,
    name: '사업자등록번호',
    info: '870-88-01143'
  },
  {
    idx: 3,
    name: '통신판매업 신고번호',
    info: '제2020-서울종로-1154호'
  },
  {
    idx: 4,
    name: '개인정보보호책임자',
    info: '김우진'
  },
  {
    idx: 5,
    name: '주소',
    info: '서울특별시 종로구 우정국로 26'
  },
  {
    idx: 6,
    name: 'Fax',
    info: '02-2068-7118'
  },
  {
    idx: 7,
    info: 'ssg@ssg.com'
  }
]

const Footer = () => {
  return (
    <Box bg="gray.200" ml={{ base: 0, md: 60 }} py={{ base: 7, md: 7 }} pl={{ base: 8, md: 12 }}>
      <Box maxW={{ base: 'full', md: '768px' }}>
        <Stack>
          <Text fontSize="md" fontWeight="bold" mb={-5}>
            (주)에스에스지닷컴
          </Text>
          <LogoIcon icon="logo_ssg" height={20} />
        </Stack>

        <Stack>
          <Flex flexFlow="wrap">
            {FOOTER_ITEMS.map((footItem) => (
              <FootItem key={footItem.idx} {...footItem} />
            ))}
          </Flex>
        </Stack>
        <Stack>
          <Flex flexFlow="wrap" mt={5}>
            <Link color="gray.900" fontWeight="bold" fontSize="md" href="#">
              이용약관
            </Link>
            <Link
              color="gray.900"
              fontWeight="bold"
              fontSize="md"
              _before={{
                content: `"|"`,
                display: 'inline-flex',
                justifyContent: 'center',
                width: 8
              }}
              href="#">
              개인정보처리방침
            </Link>
          </Flex>
        </Stack>
      </Box>
    </Box>
  )
}

const FootItem = ({ name, info }: FootItem) => {
  return (
    <Stack key={name} mr={4}>
      <Text color="gray.500" fontSize="sm">
        {name} {name && ':'} {info}
      </Text>
    </Stack>
  )
}

export default Footer
