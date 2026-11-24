import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChevronUpRightSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChevronUpRightSharp: ForwardRefExoticComponent<PhoneChevronUpRightSharpProps & RefAttributes<Svg>>;

export default PhoneChevronUpRightSharp;
export { PhoneChevronUpRightSharp };
