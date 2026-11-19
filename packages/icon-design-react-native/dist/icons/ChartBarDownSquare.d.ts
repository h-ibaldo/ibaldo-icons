import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarDownSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarDownSquare: ForwardRefExoticComponent<ChartBarDownSquareProps & RefAttributes<Svg>>;

export default ChartBarDownSquare;
export { ChartBarDownSquare };
