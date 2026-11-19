import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenDoubleSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenDoubleSlanted: ForwardRefExoticComponent<LinkBrokenDoubleSlantedProps & RefAttributes<Svg>>;

export default LinkBrokenDoubleSlanted;
export { LinkBrokenDoubleSlanted };
