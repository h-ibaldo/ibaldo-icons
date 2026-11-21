import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteTenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteTen: ForwardRefExoticComponent<BanknoteTenProps & RefAttributes<Svg>>;

export default BanknoteTen;
export { BanknoteTen };
