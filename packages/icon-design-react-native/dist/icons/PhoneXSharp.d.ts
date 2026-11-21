import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneXSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneXSharp: ForwardRefExoticComponent<PhoneXSharpProps & RefAttributes<Svg>>;

export default PhoneXSharp;
export { PhoneXSharp };
