import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCheckSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCheckSharp: ForwardRefExoticComponent<LockCheckSharpProps & RefAttributes<Svg>>;

export default LockCheckSharp;
export { LockCheckSharp };
