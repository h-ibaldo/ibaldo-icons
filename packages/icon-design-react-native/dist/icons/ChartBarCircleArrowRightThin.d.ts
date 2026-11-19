import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleArrowRightThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleArrowRightThin: ForwardRefExoticComponent<ChartBarCircleArrowRightThinProps & RefAttributes<Svg>>;

export default ChartBarCircleArrowRightThin;
export { ChartBarCircleArrowRightThin };
