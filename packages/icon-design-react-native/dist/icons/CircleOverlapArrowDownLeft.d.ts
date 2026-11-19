import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleOverlapArrowDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleOverlapArrowDownLeft: ForwardRefExoticComponent<CircleOverlapArrowDownLeftProps & RefAttributes<Svg>>;

export default CircleOverlapArrowDownLeft;
export { CircleOverlapArrowDownLeft };
