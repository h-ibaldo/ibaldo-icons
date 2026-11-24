import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuClip: ForwardRefExoticComponent<LinkMenuClipProps & RefAttributes<Svg>>;

export default LinkMenuClip;
export { LinkMenuClip };
