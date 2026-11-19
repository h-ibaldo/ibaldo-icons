import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeySkeletonSimpleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeySkeletonSimple: ForwardRefExoticComponent<KeySkeletonSimpleProps & RefAttributes<Svg>>;

export default KeySkeletonSimple;
export { KeySkeletonSimple };
