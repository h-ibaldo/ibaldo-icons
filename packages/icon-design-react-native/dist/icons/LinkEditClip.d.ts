import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditClip: ForwardRefExoticComponent<LinkEditClipProps & RefAttributes<Svg>>;

export default LinkEditClip;
export { LinkEditClip };
