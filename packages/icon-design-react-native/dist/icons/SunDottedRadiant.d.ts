import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunDottedRadiantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunDottedRadiant: ForwardRefExoticComponent<SunDottedRadiantProps & RefAttributes<Svg>>;

export default SunDottedRadiant;
export { SunDottedRadiant };
