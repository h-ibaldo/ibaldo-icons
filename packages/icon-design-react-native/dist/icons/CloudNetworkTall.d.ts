import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetworkTall: ForwardRefExoticComponent<CloudNetworkTallProps & RefAttributes<Svg>>;

export default CloudNetworkTall;
export { CloudNetworkTall };
