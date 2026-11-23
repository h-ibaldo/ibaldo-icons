import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDollarArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarArrowLeft: ForwardRefExoticComponent<BanknoteDollarArrowLeftProps & RefAttributes<Svg>>;

export default BanknoteDollarArrowLeft;
export { BanknoteDollarArrowLeft };
