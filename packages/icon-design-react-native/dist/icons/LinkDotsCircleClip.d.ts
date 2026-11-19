import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsCircleClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsCircleClip: ForwardRefExoticComponent<LinkDotsCircleClipProps & RefAttributes<Svg>>;

export default LinkDotsCircleClip;
export { LinkDotsCircleClip };
