import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircle: ForwardRefExoticComponent<ChartBarCircleProps & RefAttributes<Svg>>;

export default ChartBarCircle;
export { ChartBarCircle };
