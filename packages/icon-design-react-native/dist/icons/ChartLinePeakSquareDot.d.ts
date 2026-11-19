import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakSquareDot: ForwardRefExoticComponent<ChartLinePeakSquareDotProps & RefAttributes<Svg>>;

export default ChartLinePeakSquareDot;
export { ChartLinePeakSquareDot };
