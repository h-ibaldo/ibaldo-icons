import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleCheck: ForwardRefExoticComponent<ChartBarCircleCheckProps & RefAttributes<Svg>>;

export default ChartBarCircleCheck;
export { ChartBarCircleCheck };
