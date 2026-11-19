import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleSlanted: ForwardRefExoticComponent<LinkCircleSlantedProps & RefAttributes<Svg>>;

export default LinkCircleSlanted;
export { LinkCircleSlanted };
