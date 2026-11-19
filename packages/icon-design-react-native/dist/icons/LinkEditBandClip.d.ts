import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditBandClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditBandClip: ForwardRefExoticComponent<LinkEditBandClipProps & RefAttributes<Svg>>;

export default LinkEditBandClip;
export { LinkEditBandClip };
