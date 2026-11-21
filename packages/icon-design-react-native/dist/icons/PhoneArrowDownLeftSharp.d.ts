import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowDownLeftSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowDownLeftSharp: ForwardRefExoticComponent<PhoneArrowDownLeftSharpProps & RefAttributes<Svg>>;

export default PhoneArrowDownLeftSharp;
export { PhoneArrowDownLeftSharp };
