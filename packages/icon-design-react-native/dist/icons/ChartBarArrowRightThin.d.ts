import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarArrowRightThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarArrowRightThin: ForwardRefExoticComponent<ChartBarArrowRightThinProps & RefAttributes<Svg>>;

export default ChartBarArrowRightThin;
export { ChartBarArrowRightThin };
