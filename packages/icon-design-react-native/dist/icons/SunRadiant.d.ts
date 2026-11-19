import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunRadiantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunRadiant: ForwardRefExoticComponent<SunRadiantProps & RefAttributes<Svg>>;

export default SunRadiant;
export { SunRadiant };
