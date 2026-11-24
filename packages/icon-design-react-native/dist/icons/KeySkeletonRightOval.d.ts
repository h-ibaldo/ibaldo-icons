import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeySkeletonRightOvalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeySkeletonRightOval: ForwardRefExoticComponent<KeySkeletonRightOvalProps & RefAttributes<Svg>>;

export default KeySkeletonRightOval;
export { KeySkeletonRightOval };
