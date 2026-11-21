import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WalletTabRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WalletTabRound: ForwardRefExoticComponent<WalletTabRoundProps & RefAttributes<Svg>>;

export default WalletTabRound;
export { WalletTabRound };
