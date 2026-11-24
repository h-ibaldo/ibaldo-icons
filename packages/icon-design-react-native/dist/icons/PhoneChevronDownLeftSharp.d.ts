import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChevronDownLeftSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChevronDownLeftSharp: ForwardRefExoticComponent<PhoneChevronDownLeftSharpProps & RefAttributes<Svg>>;

export default PhoneChevronDownLeftSharp;
export { PhoneChevronDownLeftSharp };
