import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareXThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareXThin: ForwardRefExoticComponent<ChartBarSquareXThinProps & RefAttributes<Svg>>;

export default ChartBarSquareXThin;
export { ChartBarSquareXThin };
