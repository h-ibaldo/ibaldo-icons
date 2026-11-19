import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakSquare: ForwardRefExoticComponent<ChartLinePeakSquareProps & RefAttributes<Svg>>;

export default ChartLinePeakSquare;
export { ChartLinePeakSquare };
