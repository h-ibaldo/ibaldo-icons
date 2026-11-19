import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineSquare: ForwardRefExoticComponent<ChartLineSquareProps & RefAttributes<Svg>>;

export default ChartLineSquare;
export { ChartLineSquare };
