import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenSharp: ForwardRefExoticComponent<LockOpenSharpProps & RefAttributes<Svg>>;

export default LockOpenSharp;
export { LockOpenSharp };
