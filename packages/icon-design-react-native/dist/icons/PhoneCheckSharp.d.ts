import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneCheckSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneCheckSharp: ForwardRefExoticComponent<PhoneCheckSharpProps & RefAttributes<Svg>>;

export default PhoneCheckSharp;
export { PhoneCheckSharp };
