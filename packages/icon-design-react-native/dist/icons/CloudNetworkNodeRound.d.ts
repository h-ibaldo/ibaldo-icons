import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkNodeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetworkNodeRound: ForwardRefExoticComponent<CloudNetworkNodeRoundProps & RefAttributes<Svg>>;

export default CloudNetworkNodeRound;
export { CloudNetworkNodeRound };
