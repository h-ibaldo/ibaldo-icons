import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenNarrow: ForwardRefExoticComponent<LockOpenNarrowProps & RefAttributes<Svg>>;

export default LockOpenNarrow;
export { LockOpenNarrow };
