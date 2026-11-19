import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunShortDenseLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunShortDenseLarge: ForwardRefExoticComponent<SunShortDenseLargeProps & RefAttributes<Svg>>;

export default SunShortDenseLarge;
export { SunShortDenseLarge };
