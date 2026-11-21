import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhonePlusOneSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhonePlusOneSharp: ForwardRefExoticComponent<PhonePlusOneSharpProps & RefAttributes<Svg>>;

export default PhonePlusOneSharp;
export { PhonePlusOneSharp };
