import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusClip: ForwardRefExoticComponent<LinkMinusClipProps & RefAttributes<Svg>>;

export default LinkMinusClip;
export { LinkMinusClip };
