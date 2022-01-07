/* eslint-disable react/prop-types */
import React from 'react'
import { Button, ButtonGroup, HStack, IconButton, Stack } from '@chakra-ui/react'
import { SystemIcon } from '../../components/icons'

export default {
  title: '디자인시스템 테마/Button'
}

export const Default = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}
Default.args = {
  variant: 'solid',
  colorScheme: 'primary',
  size: 'md',
  isFullWidth: false,
  isDisabled: false,
  children: 'Button'
}
Default.argTypes = {
  variant: {
    control: {
      type: 'select'
    },
    options: ['solid', 'outline', 'ghost']
  },
  colorScheme: {
    control: {
      type: 'select'
    },
    options: ['primary', 'black', 'gray', 'white', 'warning']
  },
  size: {
    control: {
      type: 'select'
    },
    options: ['sm', 'md', 'lg']
  },
  isFullWidth: {
    control: { type: 'boolean' }
  },
  isDisabled: {
    control: { type: 'boolean' }
  },
  children: {
    control: { type: 'text' }
  }
}

export const Basic = () => (
  <HStack>
    {['primary', 'black', 'gray', 'white', 'warning'].map((colorScheme) => (
      <Button key={colorScheme} colorScheme={colorScheme}>
        Button
      </Button>
    ))}
  </HStack>
)

export const outlines = () => (
  <HStack>
    {['primary', 'black', 'gray', 'white', 'warning'].map((colorScheme) => (
      <Button key={colorScheme} variant="outline" colorScheme={colorScheme}>
        Button
      </Button>
    ))}
  </HStack>
)

export const withVariants = () => (
  <HStack>
    {['solid', 'outline', 'ghost'].map((variant) => (
      <Button key={variant} variant={variant}>
        Button
      </Button>
    ))}
  </HStack>
)

export const withSizes = () => (
  <HStack>
    {['sm', 'md', 'lg'].map((size) => (
      <Button key={size} size={size}>
        Button
      </Button>
    ))}
  </HStack>
)

export const WithIcon = () => (
  <Stack>
    <HStack>
      <Button
        size="sm"
        leftIcon={<SystemIcon icon="chevron_left" size="xs" marginStart="-4px" />}
        iconSpacing="4px">
        Button
      </Button>
      <Button
        size="sm"
        rightIcon={<SystemIcon icon="chevron_right" size="xs" marginEnd="-4px" />}
        variant="outline"
        iconSpacing="4px">
        Button
      </Button>
    </HStack>
    <HStack>
      <Button
        size="md"
        leftIcon={<SystemIcon icon="chevron_left" size="xs" marginStart="-4px" />}
        iconSpacing="5px">
        Button
      </Button>
      <Button
        size="md"
        rightIcon={<SystemIcon icon="chevron_right" size="xs" marginEnd="-4px" />}
        variant="outline"
        iconSpacing="5px">
        Button
      </Button>
    </HStack>
    <HStack>
      <Button
        size="lg"
        leftIcon={<SystemIcon icon="chevron_left" size="xs" marginStart="-4px" />}
        iconSpacing="6px">
        Button
      </Button>
      <Button
        size="lg"
        rightIcon={<SystemIcon icon="chevron_right" size="xs" marginEnd="-4px" />}
        variant="outline"
        iconSpacing="6px">
        Button
      </Button>
    </HStack>
  </Stack>
)

export const WithLoading = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button size="lg" isLoading>
      Email
    </Button>

    <Button isLoading loadingText="Submitting..." variant="outline">
      Submit
    </Button>
  </Stack>
)

export const WithLoadingSpinnerPlacement = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button
      isLoading
      loadingText="Loading"
      colorScheme="teal"
      variant="outline"
      spinnerPosition="start">
      Submit
    </Button>
    <Button
      isLoading
      loadingText="Loading"
      colorScheme="teal"
      variant="outline"
      spinnerPlacement="end">
      Continue
    </Button>
  </Stack>
)

export const withDisabled = () => (
  <HStack>
    {['solid', 'outline', 'ghost'].map((variant) => (
      <Button key={variant} isDisabled variant={variant}>
        Button
      </Button>
    ))}
  </HStack>
)

export const iconButton = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database" icon={<SystemIcon icon="search" size="sm" />} />

    <IconButton
      colorScheme="black"
      aria-label="Search database"
      icon={<SystemIcon icon="search" size="sm" />}
    />

    <IconButton colorScheme="gray" aria-label="Call Segun" size="lg">
      <SystemIcon icon="close" size="md" />
    </IconButton>
  </Stack>
)

export const WithButtonGroup = () => (
  <ButtonGroup variant="outline">
    <Button>Save</Button>
    <Button colorScheme="warning">Cancel</Button>
  </ButtonGroup>
)

export const attachedButtons = () => (
  <ButtonGroup size="sm" isAttached variant="outline">
    <Button marginEnd="-px">Save</Button>
    <IconButton
      fontSize="lg"
      aria-label="Add to friends"
      icon={<SystemIcon icon="plusmark" size="sm" />}
    />
  </ButtonGroup>
)
