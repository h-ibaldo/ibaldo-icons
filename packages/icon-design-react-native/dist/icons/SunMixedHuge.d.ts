import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunMixedHugeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunMixedHuge: ForwardRefExoticComponent<SunMixedHugeProps & RefAttributes<Svg>>;

export default SunMixedHuge;
export { SunMixedHuge };
