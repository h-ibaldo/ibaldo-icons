import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakCircleMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakCircleMinus: ForwardRefExoticComponent<ChartLinePeakCircleMinusProps & RefAttributes<Svg>>;

export default ChartLinePeakCircleMinus;
export { ChartLinePeakCircleMinus };
