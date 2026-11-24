import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PiggyBankCoinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PiggyBankCoin: ForwardRefExoticComponent<PiggyBankCoinProps & RefAttributes<Svg>>;

export default PiggyBankCoin;
export { PiggyBankCoin };
