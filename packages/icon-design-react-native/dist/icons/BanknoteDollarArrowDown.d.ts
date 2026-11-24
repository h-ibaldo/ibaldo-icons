import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDollarArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarArrowDown: ForwardRefExoticComponent<BanknoteDollarArrowDownProps & RefAttributes<Svg>>;

export default BanknoteDollarArrowDown;
export { BanknoteDollarArrowDown };
