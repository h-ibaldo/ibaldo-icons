import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockXNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockXNarrow: ForwardRefExoticComponent<LockXNarrowProps & RefAttributes<Svg>>;

export default LockXNarrow;
export { LockXNarrow };
