import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneSharp: ForwardRefExoticComponent<PhoneSharpProps & RefAttributes<Svg>>;

export default PhoneSharp;
export { PhoneSharp };
