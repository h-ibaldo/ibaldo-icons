import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SparkleThreeMediumProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SparkleThreeMedium: ForwardRefExoticComponent<SparkleThreeMediumProps & RefAttributes<Svg>>;

export default SparkleThreeMedium;
export { SparkleThreeMedium };
