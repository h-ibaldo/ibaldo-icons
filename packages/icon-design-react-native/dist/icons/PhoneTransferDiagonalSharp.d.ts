import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneTransferDiagonalSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneTransferDiagonalSharp: ForwardRefExoticComponent<PhoneTransferDiagonalSharpProps & RefAttributes<Svg>>;

export default PhoneTransferDiagonalSharp;
export { PhoneTransferDiagonalSharp };
