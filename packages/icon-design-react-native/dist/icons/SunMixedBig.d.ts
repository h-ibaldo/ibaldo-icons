import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunMixedBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunMixedBig: ForwardRefExoticComponent<SunMixedBigProps & RefAttributes<Svg>>;

export default SunMixedBig;
export { SunMixedBig };
