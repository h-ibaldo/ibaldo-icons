import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditBandSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditBandSlanted: ForwardRefExoticComponent<LinkEditBandSlantedProps & RefAttributes<Svg>>;

export default LinkEditBandSlanted;
export { LinkEditBandSlanted };
