import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockEyeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockEye: ForwardRefExoticComponent<LockEyeProps & RefAttributes<Svg>>;

export default LockEye;
export { LockEye };
