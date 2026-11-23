import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDollarArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarArrowUp: ForwardRefExoticComponent<BanknoteDollarArrowUpProps & RefAttributes<Svg>>;

export default BanknoteDollarArrowUp;
export { BanknoteDollarArrowUp };
