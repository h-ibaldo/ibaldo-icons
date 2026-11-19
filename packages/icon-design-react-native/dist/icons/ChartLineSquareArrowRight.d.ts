import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineSquareArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareArrowRight: ForwardRefExoticComponent<ChartLineSquareArrowRightProps & RefAttributes<Svg>>;

export default ChartLineSquareArrowRight;
export { ChartLineSquareArrowRight };
