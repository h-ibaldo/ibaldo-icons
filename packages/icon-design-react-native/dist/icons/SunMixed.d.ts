import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunMixedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunMixed: ForwardRefExoticComponent<SunMixedProps & RefAttributes<Svg>>;

export default SunMixed;
export { SunMixed };
