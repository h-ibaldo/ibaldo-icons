import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockDotsNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockDotsNarrow: ForwardRefExoticComponent<LockDotsNarrowProps & RefAttributes<Svg>>;

export default LockDotsNarrow;
export { LockDotsNarrow };
