import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeak: ForwardRefExoticComponent<ChartLinePeakProps & RefAttributes<Svg>>;

export default ChartLinePeak;
export { ChartLinePeak };
