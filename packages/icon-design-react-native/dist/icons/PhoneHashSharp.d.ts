import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneHashSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneHashSharp: ForwardRefExoticComponent<PhoneHashSharpProps & RefAttributes<Svg>>;

export default PhoneHashSharp;
export { PhoneHashSharp };
