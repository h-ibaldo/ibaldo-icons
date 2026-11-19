import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCheckNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCheckNarrow: ForwardRefExoticComponent<LockCheckNarrowProps & RefAttributes<Svg>>;

export default LockCheckNarrow;
export { LockCheckNarrow };
