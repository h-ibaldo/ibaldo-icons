import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleCheckClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleCheckClip: ForwardRefExoticComponent<LinkCircleCheckClipProps & RefAttributes<Svg>>;

export default LinkCircleCheckClip;
export { LinkCircleCheckClip };
