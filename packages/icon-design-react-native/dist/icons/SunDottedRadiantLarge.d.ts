import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunDottedRadiantLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunDottedRadiantLarge: ForwardRefExoticComponent<SunDottedRadiantLargeProps & RefAttributes<Svg>>;

export default SunDottedRadiantLarge;
export { SunDottedRadiantLarge };
