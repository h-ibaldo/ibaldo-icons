import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDollarPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarPlus: ForwardRefExoticComponent<BanknoteDollarPlusProps & RefAttributes<Svg>>;

export default BanknoteDollarPlus;
export { BanknoteDollarPlus };
