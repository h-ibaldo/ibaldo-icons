import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDollarMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarMinus: ForwardRefExoticComponent<BanknoteDollarMinusProps & RefAttributes<Svg>>;

export default BanknoteDollarMinus;
export { BanknoteDollarMinus };
