import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleXThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleXThin: ForwardRefExoticComponent<ChartBarCircleXThinProps & RefAttributes<Svg>>;

export default ChartBarCircleXThin;
export { ChartBarCircleXThin };
