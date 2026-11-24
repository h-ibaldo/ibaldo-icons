import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunDotted: ForwardRefExoticComponent<SunDottedProps & RefAttributes<Svg>>;

export default SunDotted;
export { SunDotted };
