import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakCircleXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakCircleX: ForwardRefExoticComponent<ChartLinePeakCircleXProps & RefAttributes<Svg>>;

export default ChartLinePeakCircleX;
export { ChartLinePeakCircleX };
