import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneTransferSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneTransferSharp: ForwardRefExoticComponent<PhoneTransferSharpProps & RefAttributes<Svg>>;

export default PhoneTransferSharp;
export { PhoneTransferSharp };
