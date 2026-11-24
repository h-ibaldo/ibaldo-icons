import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockEyeCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockEyeCorner: ForwardRefExoticComponent<LockEyeCornerProps & RefAttributes<Svg>>;

export default LockEyeCorner;
export { LockEyeCorner };
