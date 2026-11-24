import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpClip: ForwardRefExoticComponent<LinkArrowUpClipProps & RefAttributes<Svg>>;

export default LinkArrowUpClip;
export { LinkArrowUpClip };
