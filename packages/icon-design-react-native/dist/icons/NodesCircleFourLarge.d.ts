import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesCircleFourLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesCircleFourLarge: ForwardRefExoticComponent<NodesCircleFourLargeProps & RefAttributes<Svg>>;

export default NodesCircleFourLarge;
export { NodesCircleFourLarge };
