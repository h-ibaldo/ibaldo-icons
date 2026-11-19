import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakAxis: ForwardRefExoticComponent<ChartLinePeakAxisProps & RefAttributes<Svg>>;

export default ChartLinePeakAxis;
export { ChartLinePeakAxis };
