import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FunnelCoinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FunnelCoin: ForwardRefExoticComponent<FunnelCoinProps & RefAttributes<Svg>>;

export default FunnelCoin;
export { FunnelCoin };
