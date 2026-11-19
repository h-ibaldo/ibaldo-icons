import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleClip: ForwardRefExoticComponent<LinkCircleClipProps & RefAttributes<Svg>>;

export default LinkCircleClip;
export { LinkCircleClip };
