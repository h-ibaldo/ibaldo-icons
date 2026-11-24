import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusSlanted: ForwardRefExoticComponent<LinkMinusSlantedProps & RefAttributes<Svg>>;

export default LinkMinusSlanted;
export { LinkMinusSlanted };
