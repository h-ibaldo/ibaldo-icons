import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowKeySkeletonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowKeySkeleton: ForwardRefExoticComponent<WindowKeySkeletonProps & RefAttributes<Svg>>;

export default WindowKeySkeleton;
export { WindowKeySkeleton };
