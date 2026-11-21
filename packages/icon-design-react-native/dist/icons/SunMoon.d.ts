import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunMoonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunMoon: ForwardRefExoticComponent<SunMoonProps & RefAttributes<Svg>>;

export default SunMoon;
export { SunMoon };
