import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SplineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Spline: ForwardRefExoticComponent<SplineProps & RefAttributes<Svg>>;

export default Spline;
export { Spline };
