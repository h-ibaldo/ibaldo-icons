import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarDownPeakSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarDownPeakSquare: ForwardRefExoticComponent<ChartBarDownPeakSquareProps & RefAttributes<Svg>>;

export default ChartBarDownPeakSquare;
export { ChartBarDownPeakSquare };
