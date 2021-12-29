import { Box, Text, Flex, Stack, Link } from '@chakra-ui/react'

interface FootItem {
  copr_dt?: string
  copr_if: string
  copr_lk?: string
}

const FOOTER_ITEMS: Array<FootItem> = [
  {
    copr_dt: '대표자',
    copr_if: '강희석'
  },
  {
    copr_dt: '사업자등록번호',
    copr_if: '870-88-01143'
  },
  {
    copr_dt: '통신판매업 신고번호',
    copr_if: '제2020-서울종로-1154호'
  },
  {
    copr_dt: '개인정보보호책임자',
    copr_if: '김우진'
  },
  {
    copr_dt: '주소',
    copr_if: '서울특별시 종로구 우정국로 26'
  },
  {
    copr_dt: 'Fax',
    copr_if: '02-2068-7118'
  },
  {
    copr_if: 'ssg@ssg.com'
  }
]

const Footer = () => {
  return (
    <Box
      bg="gray.200"
      ml={{ base: 0, md: 60 }}
      pos="fixed"
      bottom={0}
      w={{ base: 'auto', md: 'calc(100% - 240px)' }}
      py={{ base: 7, md: 7 }}
      pl={{ base: 8, md: 12 }}>
      <Flex maxW={{ base: 'full', md: '768px' }} flexDir="column">
        <Stack>
          <Text fontSize="md" fontWeight="bold">
            (주)에스에스지닷컴
          </Text>
        </Stack>

        <Stack>
          <Text fontSize="7xl" fontWeight="bold">
            SSG.COM
          </Text>
        </Stack>

        <Stack>
          <Flex flexFlow="wrap">
            {FOOTER_ITEMS.map((footItem) => (
              <FootItem key={footItem.copr_dt} {...footItem} />
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
      </Flex>
    </Box>
  )
}

const FootItem = ({ copr_dt, copr_if }: FootItem) => {
  return (
    <Stack key={copr_dt} mr={4}>
      <Text color="gray.500" fontSize="sm">
        {copr_dt} {copr_dt && ':'} {copr_if}
      </Text>
    </Stack>
  )
}

export default Footer
