import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleOverlapArrowUpRightDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleOverlapArrowUpRightDownLeft: ForwardRefExoticComponent<CircleOverlapArrowUpRightDownLeftProps & RefAttributes<Svg>>;

export default CircleOverlapArrowUpRightDownLeft;
export { CircleOverlapArrowUpRightDownLeft };
