import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareCheck: ForwardRefExoticComponent<ChartBarSquareCheckProps & RefAttributes<Svg>>;

export default ChartBarSquareCheck;
export { ChartBarSquareCheck };
