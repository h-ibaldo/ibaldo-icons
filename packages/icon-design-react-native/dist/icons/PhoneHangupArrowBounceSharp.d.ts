import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneHangupArrowBounceSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneHangupArrowBounceSharp: ForwardRefExoticComponent<PhoneHangupArrowBounceSharpProps & RefAttributes<Svg>>;

export default PhoneHangupArrowBounceSharp;
export { PhoneHangupArrowBounceSharp };
