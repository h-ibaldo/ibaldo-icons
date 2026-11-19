import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarThin: ForwardRefExoticComponent<ChartBarThinProps & RefAttributes<Svg>>;

export default ChartBarThin;
export { ChartBarThin };
