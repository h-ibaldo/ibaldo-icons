import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineCircle: ForwardRefExoticComponent<ChartLineCircleProps & RefAttributes<Svg>>;

export default ChartLineCircle;
export { ChartLineCircle };
