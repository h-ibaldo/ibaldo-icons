import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeySkeletonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeySkeleton: ForwardRefExoticComponent<KeySkeletonProps & RefAttributes<Svg>>;

export default KeySkeleton;
export { KeySkeleton };
