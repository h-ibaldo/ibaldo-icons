import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowLeftSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowLeftSharp: ForwardRefExoticComponent<PhoneArrowLeftSharpProps & RefAttributes<Svg>>;

export default PhoneArrowLeftSharp;
export { PhoneArrowLeftSharp };
