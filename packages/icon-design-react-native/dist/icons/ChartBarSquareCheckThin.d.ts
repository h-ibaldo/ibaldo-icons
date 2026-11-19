import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareCheckThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareCheckThin: ForwardRefExoticComponent<ChartBarSquareCheckThinProps & RefAttributes<Svg>>;

export default ChartBarSquareCheckThin;
export { ChartBarSquareCheckThin };
