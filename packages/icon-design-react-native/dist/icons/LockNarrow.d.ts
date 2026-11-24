import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockNarrow: ForwardRefExoticComponent<LockNarrowProps & RefAttributes<Svg>>;

export default LockNarrow;
export { LockNarrow };
