import React from 'react'
import { BoxProps, forwardRef } from '@chakra-ui/react'

import * as svgs from './svg/icon'
import SvgWrapper from './SvgWrapper'

export type IconType = keyof typeof svgs
export const iconNames: IconType[] = Object.keys(svgs) as any[]

export interface SystemIconProps<T> extends BoxProps {
  icon: T
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}

const sizes = {
  xl: 8,
  lg: 7,
  md: 6,
  sm: 5,
  xs: 4
}

export const SystemIcon = forwardRef(({ icon, size, ...rest }: SystemIconProps<IconType>, ref) => (
  <SvgWrapper ref={ref} svg={svgs[icon]} width={sizes[size]} isFull {...rest} />
))

SystemIcon.defaultProps = {
  size: 'lg'
}
