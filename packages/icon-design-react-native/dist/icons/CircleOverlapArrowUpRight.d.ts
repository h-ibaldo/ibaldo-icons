import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleOverlapArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleOverlapArrowUpRight: ForwardRefExoticComponent<CircleOverlapArrowUpRightProps & RefAttributes<Svg>>;

export default CircleOverlapArrowUpRight;
export { CircleOverlapArrowUpRight };
