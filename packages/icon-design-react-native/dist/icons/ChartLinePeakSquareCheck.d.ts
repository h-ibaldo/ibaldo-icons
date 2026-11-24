import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakSquareCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakSquareCheck: ForwardRefExoticComponent<ChartLinePeakSquareCheckProps & RefAttributes<Svg>>;

export default ChartLinePeakSquareCheck;
export { ChartLinePeakSquareCheck };
