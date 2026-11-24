import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDots: ForwardRefExoticComponent<BanknoteDotsProps & RefAttributes<Svg>>;

export default BanknoteDots;
export { BanknoteDots };
