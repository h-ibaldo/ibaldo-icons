import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleXClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleXClip: ForwardRefExoticComponent<LinkCircleXClipProps & RefAttributes<Svg>>;

export default LinkCircleXClip;
export { LinkCircleXClip };
