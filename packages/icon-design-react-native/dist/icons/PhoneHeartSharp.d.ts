import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneHeartSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneHeartSharp: ForwardRefExoticComponent<PhoneHeartSharpProps & RefAttributes<Svg>>;

export default PhoneHeartSharp;
export { PhoneHeartSharp };
