import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleDottedThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleDottedThin: ForwardRefExoticComponent<ChartBarCircleDottedThinProps & RefAttributes<Svg>>;

export default ChartBarCircleDottedThin;
export { ChartBarCircleDottedThin };
