import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockEyeSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockEyeSharp: ForwardRefExoticComponent<LockEyeSharpProps & RefAttributes<Svg>>;

export default LockEyeSharp;
export { LockEyeSharp };
