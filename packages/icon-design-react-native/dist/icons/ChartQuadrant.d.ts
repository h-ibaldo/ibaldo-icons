import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartQuadrantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartQuadrant: ForwardRefExoticComponent<ChartQuadrantProps & RefAttributes<Svg>>;

export default ChartQuadrant;
export { ChartQuadrant };
