import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSlanted: ForwardRefExoticComponent<LinkSlantedProps & RefAttributes<Svg>>;

export default LinkSlanted;
export { LinkSlanted };
