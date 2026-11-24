import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneAsteriskSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneAsteriskSharp: ForwardRefExoticComponent<PhoneAsteriskSharpProps & RefAttributes<Svg>>;

export default PhoneAsteriskSharp;
export { PhoneAsteriskSharp };
