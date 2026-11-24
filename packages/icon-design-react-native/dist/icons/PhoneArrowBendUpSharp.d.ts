import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowBendUpSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowBendUpSharp: ForwardRefExoticComponent<PhoneArrowBendUpSharpProps & RefAttributes<Svg>>;

export default PhoneArrowBendUpSharp;
export { PhoneArrowBendUpSharp };
