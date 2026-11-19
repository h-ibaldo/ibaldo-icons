import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetworkRound: ForwardRefExoticComponent<CloudNetworkRoundProps & RefAttributes<Svg>>;

export default CloudNetworkRound;
export { CloudNetworkRound };
