import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenCheck: ForwardRefExoticComponent<LockOpenCheckProps & RefAttributes<Svg>>;

export default LockOpenCheck;
export { LockOpenCheck };
