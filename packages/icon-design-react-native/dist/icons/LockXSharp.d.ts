import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockXSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockXSharp: ForwardRefExoticComponent<LockXSharpProps & RefAttributes<Svg>>;

export default LockXSharp;
export { LockXSharp };
