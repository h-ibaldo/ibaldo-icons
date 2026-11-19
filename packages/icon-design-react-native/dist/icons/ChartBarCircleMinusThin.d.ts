import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleMinusThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleMinusThin: ForwardRefExoticComponent<ChartBarCircleMinusThinProps & RefAttributes<Svg>>;

export default ChartBarCircleMinusThin;
export { ChartBarCircleMinusThin };
