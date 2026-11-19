import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCheck: ForwardRefExoticComponent<LockCheckProps & RefAttributes<Svg>>;

export default LockCheck;
export { LockCheck };
