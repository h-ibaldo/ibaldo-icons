import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquare: ForwardRefExoticComponent<ChartBarSquareProps & RefAttributes<Svg>>;

export default ChartBarSquare;
export { ChartBarSquare };
