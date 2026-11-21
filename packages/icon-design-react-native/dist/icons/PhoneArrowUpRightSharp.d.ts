import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowUpRightSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowUpRightSharp: ForwardRefExoticComponent<PhoneArrowUpRightSharpProps & RefAttributes<Svg>>;

export default PhoneArrowUpRightSharp;
export { PhoneArrowUpRightSharp };
