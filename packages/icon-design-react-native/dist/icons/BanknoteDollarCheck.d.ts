import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDollarCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarCheck: ForwardRefExoticComponent<BanknoteDollarCheckProps & RefAttributes<Svg>>;

export default BanknoteDollarCheck;
export { BanknoteDollarCheck };
