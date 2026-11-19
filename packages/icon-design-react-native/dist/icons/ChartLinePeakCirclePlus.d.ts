import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLinePeakCirclePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakCirclePlus: ForwardRefExoticComponent<ChartLinePeakCirclePlusProps & RefAttributes<Svg>>;

export default ChartLinePeakCirclePlus;
export { ChartLinePeakCirclePlus };
