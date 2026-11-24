import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenDoubleClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenDoubleClip: ForwardRefExoticComponent<LinkBrokenDoubleClipProps & RefAttributes<Svg>>;

export default LinkBrokenDoubleClip;
export { LinkBrokenDoubleClip };
