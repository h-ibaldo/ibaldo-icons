import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleCheckThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleCheckThin: ForwardRefExoticComponent<ChartBarCircleCheckThinProps & RefAttributes<Svg>>;

export default ChartBarCircleCheckThin;
export { ChartBarCircleCheckThin };
