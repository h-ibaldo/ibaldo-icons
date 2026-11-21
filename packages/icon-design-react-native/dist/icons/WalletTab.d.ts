import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WalletTabProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WalletTab: ForwardRefExoticComponent<WalletTabProps & RefAttributes<Svg>>;

export default WalletTab;
export { WalletTab };
