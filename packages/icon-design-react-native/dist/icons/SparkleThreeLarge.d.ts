import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SparkleThreeLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SparkleThreeLarge: ForwardRefExoticComponent<SparkleThreeLargeProps & RefAttributes<Svg>>;

export default SparkleThreeLarge;
export { SparkleThreeLarge };
