import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineCircleXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineCircleX: ForwardRefExoticComponent<ChartLineCircleXProps & RefAttributes<Svg>>;

export default ChartLineCircleX;
export { ChartLineCircleX };
