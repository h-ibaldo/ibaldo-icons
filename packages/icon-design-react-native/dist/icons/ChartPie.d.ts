import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartPieProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartPie: ForwardRefExoticComponent<ChartPieProps & RefAttributes<Svg>>;

export default ChartPie;
export { ChartPie };
