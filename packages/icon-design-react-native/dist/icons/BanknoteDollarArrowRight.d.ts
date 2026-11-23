import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteDollarArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarArrowRight: ForwardRefExoticComponent<BanknoteDollarArrowRightProps & RefAttributes<Svg>>;

export default BanknoteDollarArrowRight;
export { BanknoteDollarArrowRight };
