import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeySkeletonRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeySkeletonRight: ForwardRefExoticComponent<KeySkeletonRightProps & RefAttributes<Svg>>;

export default KeySkeletonRight;
export { KeySkeletonRight };
