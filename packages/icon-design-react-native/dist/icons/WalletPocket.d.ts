import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WalletPocketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WalletPocket: ForwardRefExoticComponent<WalletPocketProps & RefAttributes<Svg>>;

export default WalletPocket;
export { WalletPocket };
