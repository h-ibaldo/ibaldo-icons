import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WalletProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Wallet: ForwardRefExoticComponent<WalletProps & RefAttributes<Svg>>;

export default Wallet;
export { Wallet };
