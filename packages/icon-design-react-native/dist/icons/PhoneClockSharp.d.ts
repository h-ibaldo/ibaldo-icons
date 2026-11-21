import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneClockSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneClockSharp: ForwardRefExoticComponent<PhoneClockSharpProps & RefAttributes<Svg>>;

export default PhoneClockSharp;
export { PhoneClockSharp };
