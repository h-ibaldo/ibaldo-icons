import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SparklePointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SparklePointed: ForwardRefExoticComponent<SparklePointedProps & RefAttributes<Svg>>;

export default SparklePointed;
export { SparklePointed };
