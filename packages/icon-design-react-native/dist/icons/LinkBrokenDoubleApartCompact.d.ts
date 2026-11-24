import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenDoubleApartCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenDoubleApartCompact: ForwardRefExoticComponent<LinkBrokenDoubleApartCompactProps & RefAttributes<Svg>>;

export default LinkBrokenDoubleApartCompact;
export { LinkBrokenDoubleApartCompact };
