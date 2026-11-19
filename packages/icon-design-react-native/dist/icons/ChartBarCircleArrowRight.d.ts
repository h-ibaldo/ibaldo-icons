import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleArrowRight: ForwardRefExoticComponent<ChartBarCircleArrowRightProps & RefAttributes<Svg>>;

export default ChartBarCircleArrowRight;
export { ChartBarCircleArrowRight };
