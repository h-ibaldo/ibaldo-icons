import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartSankeyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartSankey: ForwardRefExoticComponent<ChartSankeyProps & RefAttributes<Svg>>;

export default ChartSankey;
export { ChartSankey };
