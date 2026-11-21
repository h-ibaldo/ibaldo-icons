import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneTransferDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneTransferDiagonal: ForwardRefExoticComponent<PhoneTransferDiagonalProps & RefAttributes<Svg>>;

export default PhoneTransferDiagonal;
export { PhoneTransferDiagonal };
