import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareX: ForwardRefExoticComponent<ChartBarSquareXProps & RefAttributes<Svg>>;

export default ChartBarSquareX;
export { ChartBarSquareX };
