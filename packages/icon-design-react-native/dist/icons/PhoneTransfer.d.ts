import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneTransferProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneTransfer: ForwardRefExoticComponent<PhoneTransferProps & RefAttributes<Svg>>;

export default PhoneTransfer;
export { PhoneTransfer };
