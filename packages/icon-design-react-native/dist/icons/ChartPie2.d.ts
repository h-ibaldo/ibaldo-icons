import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartPie2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartPie2: ForwardRefExoticComponent<ChartPie2Props & RefAttributes<Svg>>;

export default ChartPie2;
export { ChartPie2 };
