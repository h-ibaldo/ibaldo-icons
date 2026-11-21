import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneRingSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneRingSharp: ForwardRefExoticComponent<PhoneRingSharpProps & RefAttributes<Svg>>;

export default PhoneRingSharp;
export { PhoneRingSharp };
