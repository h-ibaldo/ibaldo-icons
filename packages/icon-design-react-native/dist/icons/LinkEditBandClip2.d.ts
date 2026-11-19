import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditBandClip2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditBandClip2: ForwardRefExoticComponent<LinkEditBandClip2Props & RefAttributes<Svg>>;

export default LinkEditBandClip2;
export { LinkEditBandClip2 };
