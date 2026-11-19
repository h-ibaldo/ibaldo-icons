import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserChartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserChart: ForwardRefExoticComponent<BrowserChartProps & RefAttributes<Svg>>;

export default BrowserChart;
export { BrowserChart };
