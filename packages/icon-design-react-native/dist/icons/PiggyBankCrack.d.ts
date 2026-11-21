import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PiggyBankCrackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PiggyBankCrack: ForwardRefExoticComponent<PiggyBankCrackProps & RefAttributes<Svg>>;

export default PiggyBankCrack;
export { PiggyBankCrack };
