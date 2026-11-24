import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkClip: ForwardRefExoticComponent<LinkClipProps & RefAttributes<Svg>>;

export default LinkClip;
export { LinkClip };
