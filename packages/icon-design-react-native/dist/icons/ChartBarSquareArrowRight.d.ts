import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareArrowRight: ForwardRefExoticComponent<ChartBarSquareArrowRightProps & RefAttributes<Svg>>;

export default ChartBarSquareArrowRight;
export { ChartBarSquareArrowRight };
