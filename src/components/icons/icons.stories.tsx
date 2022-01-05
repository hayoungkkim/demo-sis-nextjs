import React from 'react'
import { Box, Center, Grid, Code } from '@chakra-ui/react'
import defaultTheme from '../../theme'
import { SystemIcon, iconNames, LogoIcon, logoIconNames } from '.'

export default {
  title: '아이콘'
}

const colors = Object.keys(defaultTheme.colors).filter(
  (key) => typeof defaultTheme.colors[key] !== 'object'
)

/**
 * system icons
 */
export const systemIcon = (args) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={10}>
    {iconNames.sort().map((name, index) => (
      <Box key={index}>
        <Center h={16}>
          <SystemIcon icon={name} color={args.color} size={args.size} />
        </Center>
        <Code p={1} fontSize="2xs" color="text-gray-400" w="full">
          {`
            <SystemIcon icon="${name.toString()}"
              ${args.color !== 'current' ? ' color="' + args.color + '"' : ''}
              ${args.size !== 'lg' ? ' size="' + args.size + '"' : ''} 
            />
          `}
        </Code>
      </Box>
    ))}
  </Grid>
)
systemIcon.storyName = '시스템 아이콘'
systemIcon.args = {
  size: 'lg',
  color: 'current'
}
systemIcon.argTypes = {
  size: {
    control: {
      type: 'select'
    },
    options: ['xl', 'lg', 'md', 'sm', 'xs']
  },
  color: {
    control: {
      type: 'select'
    },
    options: colors
  }
}

/**
 * logo icons
 */
export const logoIcon = (args) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={10}>
    {logoIconNames.sort().map((name, index) => (
      <Box key={index}>
        <Center h={16}>
          <LogoIcon icon={name} height={args.height} />
        </Center>
        <Code p={1} fontSize="2xs" color="text-gray-400" w="full">
          {`
            <LogoIcon icon="${name.toString()}" />
          `}
        </Code>
      </Box>
    ))}
  </Grid>
)
logoIcon.storyName = '로고 아이콘'
// logoIcon.args = {
//   height: 5
// }
// logoIcon.argTypes = {
//   height: {
//     control: {
//       type: 'select'
//     },
//     options: [4, 5, 6, 7, 8, 9, 10]
//   }
// }
