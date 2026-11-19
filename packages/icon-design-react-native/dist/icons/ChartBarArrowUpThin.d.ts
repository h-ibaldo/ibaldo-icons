import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarArrowUpThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarArrowUpThin: ForwardRefExoticComponent<ChartBarArrowUpThinProps & RefAttributes<Svg>>;

export default ChartBarArrowUpThin;
export { ChartBarArrowUpThin };
