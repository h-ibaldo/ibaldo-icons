import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineSquareCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareCheck: ForwardRefExoticComponent<ChartLineSquareCheckProps & RefAttributes<Svg>>;

export default ChartLineSquareCheck;
export { ChartLineSquareCheck };
