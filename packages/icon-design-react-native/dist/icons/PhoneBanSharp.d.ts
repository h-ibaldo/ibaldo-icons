import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneBanSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneBanSharp: ForwardRefExoticComponent<PhoneBanSharpProps & RefAttributes<Svg>>;

export default PhoneBanSharp;
export { PhoneBanSharp };
