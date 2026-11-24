import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineCircleDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineCircleDotted: ForwardRefExoticComponent<ChartLineCircleDottedProps & RefAttributes<Svg>>;

export default ChartLineCircleDotted;
export { ChartLineCircleDotted };
