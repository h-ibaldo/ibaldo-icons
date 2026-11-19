import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareArrowRightThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareArrowRightThin: ForwardRefExoticComponent<ChartBarSquareArrowRightThinProps & RefAttributes<Svg>>;

export default ChartBarSquareArrowRightThin;
export { ChartBarSquareArrowRightThin };
