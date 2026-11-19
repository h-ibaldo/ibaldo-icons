import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerRays2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpinnerRays2: ForwardRefExoticComponent<SpinnerRays2Props & RefAttributes<Svg>>;

export default SpinnerRays2;
export { SpinnerRays2 };
