import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarHorizontalAxisTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalAxisTwo: ForwardRefExoticComponent<ChartBarHorizontalAxisTwoProps & RefAttributes<Svg>>;

export default ChartBarHorizontalAxisTwo;
export { ChartBarHorizontalAxisTwo };
