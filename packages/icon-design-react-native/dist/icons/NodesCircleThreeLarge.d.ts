import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesCircleThreeLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesCircleThreeLarge: ForwardRefExoticComponent<NodesCircleThreeLargeProps & RefAttributes<Svg>>;

export default NodesCircleThreeLarge;
export { NodesCircleThreeLarge };
