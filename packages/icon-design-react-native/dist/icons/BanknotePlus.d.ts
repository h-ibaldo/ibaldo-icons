import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknotePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknotePlus: ForwardRefExoticComponent<BanknotePlusProps & RefAttributes<Svg>>;

export default BanknotePlus;
export { BanknotePlus };
