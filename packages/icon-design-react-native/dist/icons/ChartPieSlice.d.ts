import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartPieSliceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartPieSlice: ForwardRefExoticComponent<ChartPieSliceProps & RefAttributes<Svg>>;

export default ChartPieSlice;
export { ChartPieSlice };
