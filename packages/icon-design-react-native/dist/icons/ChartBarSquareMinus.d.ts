import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareMinus: ForwardRefExoticComponent<ChartBarSquareMinusProps & RefAttributes<Svg>>;

export default ChartBarSquareMinus;
export { ChartBarSquareMinus };
