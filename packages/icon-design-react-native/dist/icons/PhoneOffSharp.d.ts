import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneOffSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneOffSharp: ForwardRefExoticComponent<PhoneOffSharpProps & RefAttributes<Svg>>;

export default PhoneOffSharp;
export { PhoneOffSharp };
