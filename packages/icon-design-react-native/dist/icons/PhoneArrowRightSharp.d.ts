import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowRightSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowRightSharp: ForwardRefExoticComponent<PhoneArrowRightSharpProps & RefAttributes<Svg>>;

export default PhoneArrowRightSharp;
export { PhoneArrowRightSharp };
