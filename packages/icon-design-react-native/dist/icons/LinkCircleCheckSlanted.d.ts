import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleCheckSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleCheckSlanted: ForwardRefExoticComponent<LinkCircleCheckSlantedProps & RefAttributes<Svg>>;

export default LinkCircleCheckSlanted;
export { LinkCircleCheckSlanted };
