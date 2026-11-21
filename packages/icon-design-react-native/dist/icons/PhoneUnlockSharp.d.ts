import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneUnlockSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneUnlockSharp: ForwardRefExoticComponent<PhoneUnlockSharpProps & RefAttributes<Svg>>;

export default PhoneUnlockSharp;
export { PhoneUnlockSharp };
