import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakCircleCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakCircleCheck: ForwardRefExoticComponent<ChartLinePeakCircleCheckProps & RefAttributes<Svg>>;

export default ChartLinePeakCircleCheck;
export { ChartLinePeakCircleCheck };
