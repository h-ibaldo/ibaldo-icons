import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunSpokeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunSpoke: ForwardRefExoticComponent<SunSpokeProps & RefAttributes<Svg>>;

export default SunSpoke;
export { SunSpoke };
