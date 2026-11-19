import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCheckCornerNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCheckCornerNarrow: ForwardRefExoticComponent<LockCheckCornerNarrowProps & RefAttributes<Svg>>;

export default LockCheckCornerNarrow;
export { LockCheckCornerNarrow };
