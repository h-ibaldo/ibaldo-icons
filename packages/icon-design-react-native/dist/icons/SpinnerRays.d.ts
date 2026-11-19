import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerRaysProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpinnerRays: ForwardRefExoticComponent<SpinnerRaysProps & RefAttributes<Svg>>;

export default SpinnerRays;
export { SpinnerRays };
