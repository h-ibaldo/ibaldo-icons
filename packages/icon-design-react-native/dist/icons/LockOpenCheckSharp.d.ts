import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenCheckSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckSharp: ForwardRefExoticComponent<LockOpenCheckSharpProps & RefAttributes<Svg>>;

export default LockOpenCheckSharp;
export { LockOpenCheckSharp };
