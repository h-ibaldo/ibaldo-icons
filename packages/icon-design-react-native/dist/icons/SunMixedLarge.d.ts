import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunMixedLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunMixedLarge: ForwardRefExoticComponent<SunMixedLargeProps & RefAttributes<Svg>>;

export default SunMixedLarge;
export { SunMixedLarge };
