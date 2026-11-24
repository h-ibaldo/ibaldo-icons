import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakSquareMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakSquareMinus: ForwardRefExoticComponent<ChartLinePeakSquareMinusProps & RefAttributes<Svg>>;

export default ChartLinePeakSquareMinus;
export { ChartLinePeakSquareMinus };
