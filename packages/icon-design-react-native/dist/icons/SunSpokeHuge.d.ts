import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunSpokeHugeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunSpokeHuge: ForwardRefExoticComponent<SunSpokeHugeProps & RefAttributes<Svg>>;

export default SunSpokeHuge;
export { SunSpokeHuge };
