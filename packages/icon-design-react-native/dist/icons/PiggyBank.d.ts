import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PiggyBankProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PiggyBank: ForwardRefExoticComponent<PiggyBankProps & RefAttributes<Svg>>;

export default PiggyBank;
export { PiggyBank };
