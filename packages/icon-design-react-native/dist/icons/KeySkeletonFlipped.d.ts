import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeySkeletonFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeySkeletonFlipped: ForwardRefExoticComponent<KeySkeletonFlippedProps & RefAttributes<Svg>>;

export default KeySkeletonFlipped;
export { KeySkeletonFlipped };
