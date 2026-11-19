import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarArrowDownThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarArrowDownThin: ForwardRefExoticComponent<ChartBarArrowDownThinProps & RefAttributes<Svg>>;

export default ChartBarArrowDownThin;
export { ChartBarArrowDownThin };
