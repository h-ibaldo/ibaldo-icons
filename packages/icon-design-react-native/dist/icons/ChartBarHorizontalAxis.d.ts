import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarHorizontalAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalAxis: ForwardRefExoticComponent<ChartBarHorizontalAxisProps & RefAttributes<Svg>>;

export default ChartBarHorizontalAxis;
export { ChartBarHorizontalAxis };
