import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenCheckCornerNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckCornerNarrow: ForwardRefExoticComponent<LockOpenCheckCornerNarrowProps & RefAttributes<Svg>>;

export default LockOpenCheckCornerNarrow;
export { LockOpenCheckCornerNarrow };
