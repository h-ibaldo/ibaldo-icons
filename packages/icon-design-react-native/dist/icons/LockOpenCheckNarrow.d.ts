import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenCheckNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckNarrow: ForwardRefExoticComponent<LockOpenCheckNarrowProps & RefAttributes<Svg>>;

export default LockOpenCheckNarrow;
export { LockOpenCheckNarrow };
