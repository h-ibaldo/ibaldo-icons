import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WalletCashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WalletCash: ForwardRefExoticComponent<WalletCashProps & RefAttributes<Svg>>;

export default WalletCash;
export { WalletCash };
