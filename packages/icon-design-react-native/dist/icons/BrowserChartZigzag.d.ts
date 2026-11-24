import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserChartZigzagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserChartZigzag: ForwardRefExoticComponent<BrowserChartZigzagProps & RefAttributes<Svg>>;

export default BrowserChartZigzag;
export { BrowserChartZigzag };
