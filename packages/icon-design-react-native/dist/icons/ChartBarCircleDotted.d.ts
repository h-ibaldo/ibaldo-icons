import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleDotted: ForwardRefExoticComponent<ChartBarCircleDottedProps & RefAttributes<Svg>>;

export default ChartBarCircleDotted;
export { ChartBarCircleDotted };
