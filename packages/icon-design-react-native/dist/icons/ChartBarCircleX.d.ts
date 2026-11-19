import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleX: ForwardRefExoticComponent<ChartBarCircleXProps & RefAttributes<Svg>>;

export default ChartBarCircleX;
export { ChartBarCircleX };
