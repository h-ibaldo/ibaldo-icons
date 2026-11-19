import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineCircleArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineCircleArrowRight: ForwardRefExoticComponent<ChartLineCircleArrowRightProps & RefAttributes<Svg>>;

export default ChartLineCircleArrowRight;
export { ChartLineCircleArrowRight };
