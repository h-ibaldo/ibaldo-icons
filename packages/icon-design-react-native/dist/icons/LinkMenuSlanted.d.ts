import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuSlanted: ForwardRefExoticComponent<LinkMenuSlantedProps & RefAttributes<Svg>>;

export default LinkMenuSlanted;
export { LinkMenuSlanted };
