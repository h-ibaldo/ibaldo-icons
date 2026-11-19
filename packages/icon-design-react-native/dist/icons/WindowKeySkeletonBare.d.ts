import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowKeySkeletonBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowKeySkeletonBare: ForwardRefExoticComponent<WindowKeySkeletonBareProps & RefAttributes<Svg>>;

export default WindowKeySkeletonBare;
export { WindowKeySkeletonBare };
