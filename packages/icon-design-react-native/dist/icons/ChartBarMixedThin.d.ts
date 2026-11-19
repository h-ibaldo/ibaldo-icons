import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarMixedThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarMixedThin: ForwardRefExoticComponent<ChartBarMixedThinProps & RefAttributes<Svg>>;

export default ChartBarMixedThin;
export { ChartBarMixedThin };
