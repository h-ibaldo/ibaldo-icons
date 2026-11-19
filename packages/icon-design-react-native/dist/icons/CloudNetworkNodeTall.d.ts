import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkNodeTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetworkNodeTall: ForwardRefExoticComponent<CloudNetworkNodeTallProps & RefAttributes<Svg>>;

export default CloudNetworkNodeTall;
export { CloudNetworkNodeTall };
