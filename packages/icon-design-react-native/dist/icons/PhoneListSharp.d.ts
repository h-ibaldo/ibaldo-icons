import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneListSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneListSharp: ForwardRefExoticComponent<PhoneListSharpProps & RefAttributes<Svg>>;

export default PhoneListSharp;
export { PhoneListSharp };
