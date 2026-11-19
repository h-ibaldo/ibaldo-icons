import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockEyeNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockEyeNarrow: ForwardRefExoticComponent<LockEyeNarrowProps & RefAttributes<Svg>>;

export default LockEyeNarrow;
export { LockEyeNarrow };
