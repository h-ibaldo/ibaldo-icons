import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarMixedAxisThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarMixedAxisThin: ForwardRefExoticComponent<ChartBarMixedAxisThinProps & RefAttributes<Svg>>;

export default ChartBarMixedAxisThin;
export { ChartBarMixedAxisThin };
