import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneLockSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneLockSharp: ForwardRefExoticComponent<PhoneLockSharpProps & RefAttributes<Svg>>;

export default PhoneLockSharp;
export { PhoneLockSharp };
